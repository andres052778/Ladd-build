import {ElevationScreenStyled} from "./ElevationScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function ElevationScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <ElevationScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <video loop muted autoPlay src="/img/elevations.mp4"></video>
                <div className="img-container">
                    <img className="elevation" alt="elevation-img" src="/img/elevations-home.png"/>
                    <img className="elevation-left" alt="elevation-left-img" src="/img/elevation%20left.png"/>
                </div>
                <div className="info-container">
                    <h1> STRUCTURAL ELEVATION</h1>
                    <pre>"We will create your design taking into account the permitted regulations regarding elevation and foundation lifting measurements, as well as standardizing the existing project to achieve the best result.
                          We also standardize your modifications or additions to your home to ensure appropriate and permitted measurements."
                    </pre>
                </div>
            </section>
        </ElevationScreenStyled>
    );
}