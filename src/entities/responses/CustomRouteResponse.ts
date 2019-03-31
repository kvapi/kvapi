/**
 * Example how custom route response should look.
 *
 * Here we send custom header in response.
 */
import {Response} from "express";
import {JsonResponse} from "kudy";

export default class CustomRouteResponse extends JsonResponse {
    sendToResponse(res: Response): Promise<void> {
        res.set('X-Powered-By', 'Love To Code');
        return super.sendToResponse(res);
    }
}