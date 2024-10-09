import {ChiefArchitectScreenStyled} from "./ChiefArchitectScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function ChiefArchitectScreen():JSX.Element {
    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }
    return (
        <ChiefArchitectScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="video-container">
                    <video loop muted autoPlay src="/img/wallpaperchief.mp4"></video>
                </div>
                <div className="architect-container">
                    <video loop muted autoPlay src="/img/architect.mp4"></video>
                </div>
                <div className="chief-container">
                    <h1> STRUCTURAL DESIGN</h1>
                    <pre className="chief-information">"We will design your home just as you have envisioned it. We create all types of structural designs, tailor-made to your needs, and provide you with the best solutions. Our specialized team is dedicated to carrying out this work for you." </pre>
                    <pre className= "chief-client">"We have the best softwares to provide you with a wide range of designs, along with a variety of materials. We will be happy to design and bring your ideas to life. We have a top-notch architectural design engine, such as <strong>CHIEF ARCHITECT</strong>."</pre>
                </div>
            </section>
        </ChiefArchitectScreenStyled>
    );
}