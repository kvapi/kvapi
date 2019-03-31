import RouteTester from 'kudy-tester';
import * as chai from "chai";

const expect = chai.expect;

import services from './mock/services';
import * as expected from './mock/data/postList.json';
import RouteParams from "../../../src/entities/models/RouteParams";

const GetPostsListsRoute = require(__dirname + '/../../../src/router/Posts/GetPostsList');

const routeTester = new RouteTester();
const routeParams = new RouteParams({}, services);

const route = new GetPostsListsRoute(routeParams);

describe(`Route ${route.constructor.name}`, function () {
    it('should return correct list data', routeTester.test(route, {}, async function (res) {
        expect(res.json).to.be.calledWith(expected);
    }));
});