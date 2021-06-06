"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetSwitchControl = void 0;
const ResetButton_1 = require("./ResetButton");
//クラス
class ResetSwitchControl {
    async chkChange() {
        const resetBtn = new ResetButton_1.ResetButton();
        resetBtn.chkChange();
        return {
            response: 'success'
        };
    }
}
exports.ResetSwitchControl = ResetSwitchControl;
