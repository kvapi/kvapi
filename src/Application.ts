import {Server} from "http";
import * as express from 'express';
import kontik, {Services} from "kontik";
import * as bodyParser from 'body-parser';
import enco from 'enco';
import { default as RoutesLoader } from "kudy";
import RouteParams from "./models/RouteParams";

export default class Application {
    getConfig(): any {
        return enco({
            dir: `${__dirname}/../config`,
            isFolderStructure: true
        });
    }

    getServices(config: any): Services {
        return kontik(config, {
            dir: `${__dirname}/providers`
        });
    }

    async loadRoutes(app: express.Application, services: Services, config: any): Promise<void> {
        const routeParams = new RouteParams(config, services);

        const routerLoader = new RoutesLoader<RouteParams>(routeParams);
        await routerLoader.appendRoutesFromDir(app, `${__dirname}/router`);
    }

    async start(): Promise<Server> {
        const app = express();

        app.use(bodyParser.json());

        const config = this.getConfig();
        const services = this.getServices(config);

        await this.loadRoutes(app, services, config);

        const PORT = config.port;

        return await new Promise((resolve, reject) => {
            const server = app.listen(PORT, () => {
                resolve(server);
            });
        })
    }
}