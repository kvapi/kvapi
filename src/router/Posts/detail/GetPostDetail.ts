import ConsoleLogRoute from '../../../routes/ConsoleLogRoute';
import CustomRouteResponse from '../../../responses/CustomRouteResponse';
import {Request, Response} from "express";
import { AbstractResponse } from "kudy";
import {Services} from "kontik";
import PostApiService from "../../../providers/PostApiService";
import RouteParams from "../../../models/RouteParams";

class GetPostDetail extends ConsoleLogRoute {
    protected postApiService: PostApiService;

    constructor(routeParams: RouteParams) {
        super();

        this.postApiService = routeParams.services.PostApiService;
    }

    get method() {
        return 'GET';
    }

    get path() {
        return '/:postId';
    }

    get parametersSchema() {
        return {
            type: 'object',
            properties: {
                postId: {
                    type: 'number'
                }
            },
            required: ['postId']
        }
    }

    async handler(req: Request, res: Response): Promise<AbstractResponse> {
        const postApiService = await this.postApiService;
        const data = await postApiService.getPostData(req.params.postId);

        return new CustomRouteResponse(data);
    }
}

module.exports = GetPostDetail;