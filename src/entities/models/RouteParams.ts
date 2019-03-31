export default class RouteParams {
    public readonly config: any;
    public readonly services: { [key: string]: any };

    constructor(config: any, services: any) {
        this.config = config;
        this.services = services;
    }
}