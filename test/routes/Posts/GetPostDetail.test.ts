import RouteTester from 'kudy-tester';
import * as chai from "chai";
import * as sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.use(sinonChai);

import services from './mock/services';
import * as expected from './mock/data/postDetail.json';
import RouteParams from "../../../src/entities/models/RouteParams";

const GetPostDetailTest = require(__dirname + '/../../../src/router/Posts/detail/GetPostDetail');

const routeTester = new RouteTester();
const routeParams = new RouteParams({}, services);
const route = new GetPostDetailTest(routeParams);

describe(`Route ${route.constructor.name}`, function () {
    it('should return correct list data', routeTester.test(route, {}, async function (res) {
        expect(res.json).to.be.calledWith(expected);
    }));
});