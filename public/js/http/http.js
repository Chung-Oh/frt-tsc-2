define(["require", "exports", "./response"], function (require, exports, response_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
    })(HttpVerbs || (HttpVerbs = {}));
    class Http {
        get(url) {
            return new Promise((resolve, reject) => {
                let xhttp = this.createXhttp(HttpVerbs.GET, url);
                this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send();
            });
        }
        post(url, data) {
            return new Promise((resolve, reject) => {
                let xhttp = this.createXhttp(HttpVerbs.POST, url);
                this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send(JSON.stringify(data));
            });
        }
        createXhttp(verb, url) {
            let xhttp = new XMLHttpRequest();
            xhttp.open(verb, url, true);
            return xhttp;
        }
        configureCallbacks(xhttp, resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    const response = new response_1.default(this.responseText, this.status);
                    // metodo 'startsWith()' abaixo, vai ser true se começar na casa do 200
                    if (this.status.toString().startsWith('20')) {
                        resolve(response);
                    }
                }
                // reject(this.responseText);
            };
        }
    }
    exports.default = Http;
});
//# sourceMappingURL=http.js.map