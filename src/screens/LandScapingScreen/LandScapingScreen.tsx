import {LandScapingScreenStyled} from "./LandScapingScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function LandScapingScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <LandScapingScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="wallpaper-container">
                    <video autoPlay loop muted src="/img/wallpaper-landscaping.mp4"></video>
                </div>
                <div className="info-container">
                     <h1> GALLERY </h1>
                </div>
                <div className="img-container">
                    <img alt="lanscaping-img" src="/img/landscaping%20(1).jpg"/>
                    <img alt="lanscaping-img" src="/img/landscaping%20(2).jpg"/>
                    <img alt="lanscaping-img" src="/img/landscaping%20(3).jpg"/>
                    <img alt="lanscaping-img" src="/img/landscaping%20(4).jpg"/>
                    <img alt="lanscaping-img" src="/img/landscaping%20(5).jpg"/>
                    <img alt="lanscaping-img" src="/img/landscaping%20(6).jpg"/>
                </div>
            </section>
        </LandScapingScreenStyled>
    );
}