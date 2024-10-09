import {PlanScreenStyled} from "./PlanScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function PlanScreen():JSX.Element {
    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }
    return (
        <PlanScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <video loop muted autoPlay src="/img/structural.mp4"></video>
                <div className="img-container">
                    <img className="proposed" alt="proposed-img" src="/img/proposed.jpg"/>
                    <img className="floor" alt="floor-img" src="/img/floor-plan.png"/>
                </div>
                <div className="info-container">
                    <pre> "We structurally design your home, starting from an existing point or from scratch if needed; we handle all the work at every stage, providing support until we achieve the home you've dreamed of designing."</pre>
                    <pre> "We work with current regulations, and we will either design the home of your dreams or ensure compliance with the relevant regulations for the design you already have."</pre>
                </div>
            </section>
        </PlanScreenStyled>
    );
}