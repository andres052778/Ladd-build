import {SitePlanScreenStyled} from "./SitePlanScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function SitePlanScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <SitePlanScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="img-container">
                    <img className="wallpapper"/>
                    <img className="wallpapper-2"/>
                </div>
                <div className="text-container">
                    <h1> SITE PLAN </h1>
                </div>
                <div className="description-container">
                    <pre className="description"> "We carry out your Site Plan, fulfilling all the requirements for the city. Additionally, we construct with real measurements, creating plans faithfully reflecting reality."
                    </pre>
                </div>
                <div className="galery">
                    <img className="site-plan" alt="site-img" src="/img/siteplan3.jpg"/>
                    <img className="site-plan" alt="site-img" src="/img/siteplan4.jpg"/>
                    <img className="site-plan" alt="site-img" src="/img/siteplan5.jpg"/>
                </div>
            </section>
        </SitePlanScreenStyled>
    );
}