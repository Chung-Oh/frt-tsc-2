define(["require", "exports", "../http/post-http", "../components/form", "../components/validators/validators", "../components/validators/validator-manager"], function (require, exports, post_http_1, form_1, validators_1, validator_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostNewPage {
        constructor(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        init() {
            document.querySelector('#my-form')
                .addEventListener('submit', (event) => {
                event.preventDefault();
                this.submit();
                return false;
            });
        }
        submit() {
            if (!this.isValid()) {
                return;
            }
            this.postHttp.save({
                title: form_1.default.getValueFromField('#title'),
                body: form_1.default.getValueFromField('#body')
            }).then(obj => this.goToPostList());
        }
        goToPostList() {
            window.location.href = '/post/post-list.html';
        }
        isValid() {
            const validator = new validator_manager_1.default([
                { selectorField: '#title', rules: [validators_1.default.required], messageInvalid: 'Título inválido.' },
                { selectorField: '#body', rules: [validators_1.default.required], messageInvalid: 'Conteúdo inválido.' }
            ]);
            return validator.isValid();
        }
    }
    exports.default = PostNewPage;
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map