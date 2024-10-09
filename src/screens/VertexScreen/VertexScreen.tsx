import {VertexScreenStyled} from "./VertexScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function VertexScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <VertexScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="info-container">
                    <h1> STEEL FRAMING </h1>
                    <pre> "We work to design your home, and we can do it in metal structures. We handle the best modeling software like Vertex."
                        Vertex BD is a professional BIM software for wood / timber and cold-formed steel framing that automates your design and manufacturing processes. (BIM is an acronym for Building Information Modeling).
                        Vertex BD allows you to complete projects quickly and accurately while minimizing errors in production.
                        Vertex BD Building Design software executes many of the repetitive, time-consuming tasks that slow down your work. It automates the process of generating accurate architectural drawings sets, panel fabrication drawings, structural layouts, cut lists, material reports and manufacturing data, all from the BIM model.</pre>
                </div>
                <div className="media-container">
                    <video loop muted autoPlay src="/img/steel-framing.mp4"></video>
                    <video loop muted autoPlay src="/img/wallpaper-vertex.mp4"></video>
                </div>
            </section>

        </VertexScreenStyled>
    );
}