import {CalculationsScreenStyled} from "./CalculationsScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function CalculationsScreen():JSX.Element {
    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }
    return (
        <CalculationsScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="video-container">
                    <video loop muted autoPlay src="/img/energy%20calculations.mp4"></video>
                </div>
                <div className="img-container">
                    <img className="calculation" alt="calculation-img" src="/img/Calculation.jpeg"/>
                </div>
                <div className="text-container">
                    <h1> ENERGETIC CALCULATIONS </h1>
                    <pre> We carry out the process of energy calculations for all types of homes, applying relevant laws and requirements to make your home energy efficient. We use software approved by regulations called "ENERGY PRO".</pre>
                </div>
            </section>
        </CalculationsScreenStyled>
    );
}