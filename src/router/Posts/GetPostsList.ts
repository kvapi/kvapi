import ConsoleLogRoute from '../../routes/ConsoleLogRoute'
import CustomRouteResponse from '../../responses/CustomRouteResponse';
import {Request, Response} from "express";
import RouteParams from "../../models/RouteParams";
import PostApiService from "../../providers/PostApiService";
import {JsonResponse} from "kudy";



class GetPostsList extends ConsoleLogRoute {
    protected postApiService: PostApiService;

    constructor(routeParams: RouteParams) {
        super();

        this.postApiService = routeParams.services.PostApiService;
    }

    get method() {
        return 'GET';
    }

    get path() {
        return '';
    }

    async handler(req: Request, res: Response): Promise<JsonResponse> {
        const postApiService = await this.postApiService;
        const data = await postApiService.getPostList();

        return new CustomRouteResponse(data);
    }
}

module.exports = GetPostsList;