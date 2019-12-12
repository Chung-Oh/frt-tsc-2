import Http from './http';
import Response from './response';
import PostTable from '../components/post-table';

interface Callable {
	(posts: Array<any>)
}

export default class PostHttp {
	private http: Http;

	constructor() {
		this.http = new Http();
	}

	query(): Promise<Array<any>> {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
			.then(function (response: Response) {
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
		}
		xhttp.send();
	}
}