import * as postsJson from "./data/postList.json";
import * as postDetailJson from "./data/postDetail.json";

export default {
    PostApiService: {
        getPostList: async () => {
            return await postsJson;
        },

        getPostData: async () => {
            return await postDetailJson;
        }
    }
}