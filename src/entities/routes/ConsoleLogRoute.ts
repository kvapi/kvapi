import {Request, Response} from "express";
import { AbstractRoute } from "kudy";

/**
 * Here we prepare abstract route for printing their calling to console through middleware.
 */
export default abstract class ConsoleLogRoute extends AbstractRoute {
    /**
     * This middleware is called before schema validation.
     */
    get preMiddleware() {
        const touchMiddleware = (req: Request, res: Response, next: Function) => {
            console.log('Route middleware before schema validation');
            next();
        };

        return touchMiddleware;
    }

    /**
     * This middleware is called after schema validation right before route handler.
     * Notice, that you can return even array with multiple middleware.
     */
    get middleware() {
        const logMiddleware = (req: Request, res: Response, next: Function) => {
            console.log('Route middleware after schema validation');
            next();
        };

        return [ logMiddleware ]
    }
}