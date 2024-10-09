import {MenuScreenStyled} from "./MenuScreenStyled.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/HookStore.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";
import { FaWhatsapp } from "react-icons/fa";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";

export default function MenuScreen():JSX.Element {

 const dispatch = useAppDispatch();
 const typeDownMenu = useAppSelector((state) => state.modalState.typeDownMenu);
 const openCloseDownMenu = useAppSelector((state) => state.modalState.openCloseDownMenu);

 const handleClick = () => {
        window.open('https://wa.me/16503849822?text=' + encodeURIComponent('Hi, I need more information from your company'), '_blank');
    };

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
        if (type_menu === "call") {
            if (typeDownMenu !== 'call') {
                dispatch(setTypeDownMenu(type_menu));
                dispatch(setOpenCloseDownMenu(true));
            } else {
                dispatch(setTypeDownMenu(''));
                dispatch(setOpenCloseDownMenu(false));
            }
        }
    }
    return (
        <MenuScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <div className="leftbar">
                    <h1 >LAYOUT ARCHITECTURAL DRAFTING & DESIGN</h1>
                    <pre>{'CEO Luis Antonio Osorio (650) 384-9822\n' +
                        'MSG (650) 262-3141\n' +
                        'Email ladd.build@gmail.com'}</pre>
                    <h2 > About Us </h2>
                    <pre
                        className="description"> {`Ladd is a company specialized in different most used design and architecture software we are located in California, in addition to having extensive work experience in the sector.`}
                    </pre>
                    <pre
                        className="description-two">{`Our team is highly qualified and efficient always at the service of our customers.`}
                     </pre>
                </div>
                <div className="content-container">
                    <video src="/img/filmewallpaper.mp4" loop muted autoPlay className="videobackground"></video>
                </div>
            </section>
            <div className="icon-container" onClick={() => handledCloseSidebar('call')}>
                <FaWhatsapp className= "icon-category" />
                    <div className={openCloseDownMenu && typeDownMenu === 'call' ? 'up-menu active': 'up-menu'}>
                        <span className="text-content" onClick={handleClick}>Whatsapp</span>
                        <span className="text-content">Facebook</span>
                        <span className="text-content">Contact </span>
                    </div>
            </div>
        </MenuScreenStyled>
    );
}