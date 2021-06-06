"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ライブラリ読み込み
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
//body-parserの設定
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const port = process.env.PORT || 3000; // port番号を指定
// ------ ルーティング ------ //
const index_js_1 = __importDefault(require("./routes/index.js"));
app.use('/', index_js_1.default);
//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
