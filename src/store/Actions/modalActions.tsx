import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {OPEN_AND_CLOSE_MODAL_DOWN_MENU, TYPE_DOWN_MENU,} from "../Types/modalTypes.tsx";

export const setOpenCloseDownMenu = (action: boolean) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: OPEN_AND_CLOSE_MODAL_DOWN_MENU,
        payload: action
    });
}
export const setTypeDownMenu = (type: menuTypeModels) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: TYPE_DOWN_MENU,
        payload: type
    });
}
