import Http from "./http";

interface Callable {
	(posts: Array<any>)
}

export default class PostHttp {
	private http: Http;

	constructor() {
		this.http = new Http();
	}

	query(callable: Callable, callableError) {
		this.http.get('https://jsonplaceholder.typicode.com/posts');
	}

	save() {
		let xhttp = new XMLHttpRequest();
		xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				callable(this.responseText);
			}
		}
		xhttp.send();
	}
}