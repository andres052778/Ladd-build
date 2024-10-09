import {WoodScreenStyled} from "./WoodScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function WoodScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <WoodScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="wallpapper-container">
                    <video loop muted autoPlay src="/img/wallpaper-wood.mp4"></video>
                </div>
                <div className="wood-container">
                    <h1> WOOD FRAMING</h1>
                    <pre className="energy-description">"
                        We will design your home using the material you like the most, complying with all regulations. We can work on it using our software like VERTEX BD to model and meet your expectations... In our wood design, you will find a cozier alternative for your home."
                    </pre>

                </div>
                <div className="img-container">
                    <img className="wood" alt="energy-img" src="/img/vertex-wood.jpg"/>
                    <img className="wood" alt="energy-img" src="/img/vertex-wood1.png"/>
                    <img className="wood" alt="energy-img" src="/img/vertex-wood2.jpg"/>
                    <img className="wood" alt="energy-img" src="/img/vertex-wood3.png"/>
                </div>
            </section>
        </WoodScreenStyled>
    );
}