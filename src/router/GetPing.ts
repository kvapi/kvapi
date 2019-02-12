import ConsoleLogRoute from "../routes/ConsoleLogRoute";
import CustomRouteResponse from "../responses/CustomRouteResponse";
import {Request, Response} from "express";

class GetPing extends ConsoleLogRoute {
    get method() {
        return 'GET';
    }

    get path() {
        return '/ping';
    }

    async handler(req: Request, res: Response) {
        return new CustomRouteResponse({
            data: 'pong'
        });
    }
}

export default async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(new GetPing()), 50);
    });
};