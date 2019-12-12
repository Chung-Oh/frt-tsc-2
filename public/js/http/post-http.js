define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostHttp {
        constructor() {
            this.http = new http_1.default();
        }
        query() {
            return this.http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                console.log(JSON.parse(response.body));
                return JSON.parse(response.body);
            });
        }
        save() {
            let xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // callable(this.responseText);
                }
            };
            xhttp.send();
        }
    }
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map