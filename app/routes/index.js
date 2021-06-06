"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const TestService_1 = require("../services/TestService");
const ApiSsPatrolLampService_1 = require("../services/ApiSsPatrolLampService");
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
// ルーティングする
const router = express_1.default.Router();
const clone_service = new ApiSsPatrolLampService_1.ApiSsPatrolLampService();
clone_service.clone().catch(e => { console.log("ERROR!", e); });
// routerにルーティングの動作を記述する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});
router.get('/test', (req, res, next) => {
    const service = new TestService_1.TestService();
    service
        .test()
        .then(result => res.status(200).send(result))
        .catch(next);
});
router.get('/lamp-api', (req, res, next) => {
    // const { user } = req.params;
    const service = new ApiSsPatrolLampService_1.ApiSsPatrolLampService();
    service
        .get()
        .then(result => res.status(200).send(result))
        .catch(next);
});
router.post('/lamp-api', (req, res, next) => {
    const params = req.body;
    const service = new ApiSsPatrolLampService_1.ApiSsPatrolLampService();
    service
        .setting(params)
        .then(result => res.status(200).send(result))
        .catch(next);
});
// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------
// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found'
        },
    });
});
//routerをモジュールとして扱う準備
// module.exports = router;
exports.default = router;
// exports.r = router;
