import { ApiPostDataService } from "./ApiPostDateService";
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
export class ApiService extends ApiPostDataService {

    public postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    public commentsEndpoint = 'https://jsonplaceholder.typicode.com/comments';

    public async getData(endpoint: string): Promise<any[]> {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            
            return json;
        } catch (error) {
            console.error('GET error:', error);
            return [];
        }
    }

    public async getPosts(): Promise<Post[]> {
        return await this.getData(this.postsEndpoint);
    }

    public async getComments(): Promise<any[]> {
        return await this.getData(this.commentsEndpoint);
    }

}
