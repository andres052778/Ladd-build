import {HeaderComponentStyled} from "./HeaderComponentStyled.tsx";
import {useNavigate} from "react-router-dom";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/HookStore.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";
import { ImCompass } from "react-icons/im";

export default function HeaderComponent(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const typeDownMenu = useAppSelector((state) => state.modalState.typeDownMenu);
    const openCloseDownMenu = useAppSelector((state) => state.modalState.openCloseDownMenu);


    
    function HandledRedirectMenu(type_menu: menuTypeModels) {
        if (type_menu === "home") {
            navigate("/home");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "efficiency") {
            navigate("/home/energy");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "structural") {
            navigate("/home/structural");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "vertex") {
            navigate("/home/vertex");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "wood") {
            navigate("/home/wood");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "planing") {
            navigate("/home/planing");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "building") {
            navigate("/home/building");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "land") {
            navigate("/home/land");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "chief") {
            navigate("/home/chief");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "plan") {
            navigate("/home/plan");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "elevation") {
            navigate("/home/elevations");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "site") {
            navigate("/home/site");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "calculations") {
            navigate("/home/calculations");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "certificate") {
            navigate("/home/certificate");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "collaboration") {
            navigate("/home/collaboration");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "services") {
            navigate("/home/services");
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "architect") {
            if (typeDownMenu !== 'architect') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
        if (type_menu === "energy") {
            if (typeDownMenu !== 'energy') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
        if (type_menu === "contact") {
            if (typeDownMenu !== 'contact') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
        if (type_menu === "city") {
            if (typeDownMenu !== 'city') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
        if (type_menu === "company") {
            if (typeDownMenu !== 'company') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
        if (type_menu === "cities") {
            if (typeDownMenu !== 'cities') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
    }


    return (
        <HeaderComponentStyled>
            <img
                onClick={() => HandledRedirectMenu("home")}
                className="logo-header" alt="logo-header"
                src="/img/logo-header.png"
            />
            <div className="header-content">
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("city")} className="header-text">City Permits</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'city' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'city' ? 'down-menu active': 'down-menu'}>
                            <span onClick={() => HandledRedirectMenu("planing")}>Planning Permit Process</span>
                            <span onClick={() => HandledRedirectMenu("building")}>Building Permit Process</span>
                            <span onClick={() => HandledRedirectMenu("land")}>Landscaping</span>
                        </div>
                </div>
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("architect")} className="header-text">Architecture</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'architect' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'architect' ? 'down-menu active': 'down-menu'}>
                            <span onClick={() => HandledRedirectMenu("chief")}>Architectural Design</span>
                            <span onClick={() => HandledRedirectMenu("plan")}>Architectural Plans</span>
                            <span onClick={() => HandledRedirectMenu("elevation")}>Elevation & Sections</span>
                            <span onClick={() => HandledRedirectMenu("site")}>Site Plans & Surveys</span>
                        </div>
                </div>
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("energy")} className="header-text">Energy</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'energy' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'energy' ? 'down-menu active': 'down-menu'}>
                            <span onClick={() => HandledRedirectMenu("calculations")}>Energy Calculations</span>
                            <span onClick={() => HandledRedirectMenu("certificate")}>Efficiency Certificate</span>
                            <span onClick={() => HandledRedirectMenu("efficiency")}>Energy Software </span>
                        </div>
                </div>
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("contact")} className="header-text">Structural</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'contact' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'contact' ? 'down-menu active': 'down-menu'}>
                            <span onClick={() => HandledRedirectMenu("wood")}>Wood Framing Design</span>
                            <span onClick={() => HandledRedirectMenu("vertex")}>Steel Framing Design</span>
                            <span onClick={() => HandledRedirectMenu("structural")}>Structural 3D View</span>
                        </div>
                </div>
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("company")} className="header-text">Companies</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'company' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'company' ? 'down-menu active': 'down-menu'}>
                            <span onClick={() => HandledRedirectMenu("collaboration")}>Collaboration  With Companies</span>
                            <span onClick={() => HandledRedirectMenu("services")}>Services For Your Company</span>
                        </div>
                </div>
                <div className="container-header-text">
                    <a onClick={() => HandledRedirectMenu("cities")} className="header-text">Countries</a>
                    <ImCompass className={openCloseDownMenu && typeDownMenu === 'cities' ? 'icon-text icon-active': 'icon-text'}/>
                        <div className={openCloseDownMenu && typeDownMenu === 'cities' ? 'county-menu active': 'county-menu'}>
                            <span>Alameda</span>
                            <span>Calaveras</span>
                            <span>Contra Costa</span>
                            <span>El Dorado</span>
                            <span>Fresno</span>
                            <span>Madera</span>
                            <span>Merced</span>
                            <span>Monterrey</span>
                            <span>Napa</span>
                            <span>Nevada</span>
                            <span>Orange</span>
                            <span>Sacramento</span>
                            <span>San Benito</span>
                            <span>San Bernardino</span>
                            <span>San Diego</span>
                            <span>San Franciso</span>
                            <span>San Joaquin</span>
                            <span>San Luis Obispo</span>
                            <span>San Mateo</span>
                            <span>Santa Clara</span>
                            <span>Santa Cruz</span>
                            <span>Shasta</span>
                            <span>Siskiyou</span>
                            <span>Solano</span>
                            <span>Sonoma</span>
                            <span>Stanislaus</span>
                            <span>Yuba</span>
                        </div>
                </div>
            </div>
        </HeaderComponentStyled>
    );
}
