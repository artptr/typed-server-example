declare const __dirname: String;

import "reflect-metadata";
import { Container } from "typedi";

import {
    createConnection,
    useContainer as useContainerInOrm
} from "typeorm";

import {
    createKoaServer,
    useContainer as useContainerInControllers
} from "routing-controllers";

useContainerInOrm(Container);
useContainerInControllers(Container);

(async () => {
    await createConnection({
        driver: {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "test"
        },
        entities: [__dirname + "/entity/*.ts"],
        autoSchemaSync: true
    });

    createKoaServer({
        controllers: [__dirname + "/controller/*.ts"]
    }).listen(3000);
})();
