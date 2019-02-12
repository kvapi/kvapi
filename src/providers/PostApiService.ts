import {Services} from "kontik";
import { default as JsonRequest } from "async-json-request";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default class PostApiService {
    private api: JsonRequest;

    constructor(services: Services, config: any) {
        this.api = new JsonRequest(config.api.posts);
    }

    public async getPostList(): Promise<IPost[]> {
        const result = await this.api.get<IPost[]>('');
        return result.body;
    }

    public async getPostData(postId: number): Promise<IPost> {
        const result = await this.api.get<IPost>(`/${postId}`);
        return result.body;
    }
}