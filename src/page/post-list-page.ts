import Page from './page';
import PostHttp from '../http/post-http';
import PostTable from '../components/post-table';

export default class PostListPage implements Page {
	constructor(private postHttp: PostHttp, private postTable: PostTable) {
		this.init();
	}

	init(): void {
		this.getPosts();
	}

	getPosts() {
		this.postHttp.query()
			.then(posts => { // resolve da Promise
				this.postTable.data = posts;
				this.postTable.make();
			})
			.catch((response: Response) => {
				// Aqui o reject da Promise
				console.log(response);
			});
	}
}

const postHttp  = new PostHttp();
const postTable = new PostTable('#my-table', ['title', 'body']);
new PostListPage(postHttp, postTable);