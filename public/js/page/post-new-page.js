define(["require", "exports", "../http/post-http"], function (require, exports, post_http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostNewPage {
        constructor(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        init() {
            this.postHttp.save({ title: 'titulo', body: 'conteudo' })
                .then(obj => console.log(obj));
            document.querySelector('#my-form')
                .addEventListener('submit', (event) => {
                event.preventDefault();
                this.submit();
                return false;
            });
        }
        submit() { }
    }
    exports.default = PostNewPage;
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map