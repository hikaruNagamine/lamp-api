import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { TestService } from '../services/TestService';
import { ApiSsPatrolLampService } from '../services/ApiSsPatrolLampService';
import { config } from 'process';
const app = express();
app.use(helmet());
app.use(cors());
// ルーティングする
const router = express.Router();

const clone_service = new ApiSsPatrolLampService();
clone_service.clone().catch(e => {console.log("ERROR!", e)});

// routerにルーティングの動作を記述する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});

router.get('/test', (req, res, next) => {
    const service = new TestService();
    service
        .test()
        .then(result => res.status(200).send(result))
        .catch(next);
});

router.get('/lamp-api', (req, res, next) => {
    // const { user } = req.params;
    const service = new ApiSsPatrolLampService();
    service
        .get()
        .then(result => res.status(200).send(result))
        .catch(next);
});

router.post('/lamp-api', (req, res, next) => {
    const params = req.body;
    const service = new ApiSsPatrolLampService();
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
export default router;
// exports.r = router;