/**
 * In newer version of node unhandled promise rejections will throw Error and end up application.
 * So this is the Future and don't remove it!
 */
import {Server} from "http";

process.on('unhandledRejection', up => {
    throw up
});

import Application from "./Application";

new Application()
    .start()
    .then((server: Server) => {
        const serverAddress = server.address();

        const bind = typeof serverAddress === "string"
            ? `pipe ${serverAddress}`
            : `port ${serverAddress.port}`;

        console.log(`Listening on ${bind}`);
    });
