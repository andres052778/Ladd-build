import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {OPEN_AND_CLOSE_MODAL_DOWN_MENU, TYPE_DOWN_MENU,} from "../Types/modalTypes.tsx";

interface IStateModal {
    typeDownMenu: menuTypeModels;
    openCloseDownMenu: boolean;
}
const initialStateModal: IStateModal = {
    typeDownMenu: '',
    openCloseDownMenu: false,
}

const modalReducer = function (state = initialStateModal, action: {type:any; payload:any}):IStateModal {
    switch (action.type) {
        case OPEN_AND_CLOSE_MODAL_DOWN_MENU:
            return {
                typeDownMenu: state.typeDownMenu,
                openCloseDownMenu: action.payload,
            }
        case TYPE_DOWN_MENU:
            return {
                typeDownMenu: action.payload,
                openCloseDownMenu: state.openCloseDownMenu,
            }
        default:
            return state;
    }
}

export default modalReducer;
