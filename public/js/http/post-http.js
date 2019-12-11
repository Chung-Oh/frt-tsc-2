define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function (callable, callableError) {
            this.http.get('https://jsonplaceholder.typicode.com/posts');
        };
        PostHttp.prototype.save = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callable(this.responseText);
                }
            };
            xhttp.send();
        };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map