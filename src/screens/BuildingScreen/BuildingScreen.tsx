import {BuildingScreenStyled} from "./BuildingScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function BuildingScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <BuildingScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="wallpaper-container">
                    <video loop muted autoPlay src="/img/wallpapper-building.mp4"></video>
                </div>
                <div className="info-container">
                    <h1> BUILDING PERMIT</h1>
                    <pre>"In LADD, we also provide support throughout the process of obtaining your construction permit. We handle all the necessary paperwork to ensure you legally obtain the permit you need to make your home a reality, 100% approved by the city."</pre>
                </div>
                <div className="img-container">
                    <img alt="building" src="/img/building.jpg"/>
                </div>
                <div className="aproved">
                    <img alt="building-img" src="/img/building-home.jpeg"/>
                </div>
            </section>
        </BuildingScreenStyled>
    );
}