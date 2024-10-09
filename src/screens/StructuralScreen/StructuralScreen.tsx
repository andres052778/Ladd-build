import {StructuralScreenStyled} from "./StructuralScreenStyled.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";

export default function StructuralScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <StructuralScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="video-container">
                   <video loop muted autoPlay src="/img/wallpapper-render.mp4"></video>
                </div>
                <div className="info-container">
                    <h1> Renders 3D</h1>
                    <pre className="render-description"> "We render your project to achieve a completely professional presentation, as well as being able to perform 3D tours to visualize how your project could look before being built." </pre>
                    <img alt="example" src="/img/example.jpg"/>
                </div>
                <div className="img-container">
                    <img alt="render" src="/img/render1.png"/>
                    <img alt="render" src="/img/render2.png"/>
                    <img alt="render" src="/img/render%203.png"/>
                    <img alt="render" src="/img/render%204.png"/>
                </div>
            </section>
        </StructuralScreenStyled>
    );
}