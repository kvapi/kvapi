import {Router} from 'express';

export default (parentRouter: Router) => {
    const router = Router();

    parentRouter.use('/posts', router);

    return router;
}