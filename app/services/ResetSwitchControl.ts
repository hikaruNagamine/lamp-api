import { ResetButton } from './ResetButton'

export interface IResetSwitchControl {
    response: string;
}

//クラス
export class ResetSwitchControl {
    public async chkChange() : Promise<IResetSwitchControl> {
        const resetBtn = new ResetButton()
        resetBtn.chkChange();
        return {
            response: 'success'
        }
    }
}