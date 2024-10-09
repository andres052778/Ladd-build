import {PlaningScreenStyled} from "./PlaningScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function PlaningScreen():JSX.Element {

    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }

    return (
        <PlaningScreenStyled>
          <section onClick={() => handledCloseSidebar('')}>
              <div className="info-container">
                  <h1> PLANNING PROCESS</h1>
                  <pre>"We provide support throughout the approval process for your blueprints; we ensure that they meet all the standards required by the city, and we can also provide support and guidance for any required changes and improvements."</pre>
                  <img alt="process" src="/img/proccess.png"/>
              </div>
              <div className="video-container">
                  <video loop muted autoPlay src="/img/wallpapper-planning.mp4"></video>
              </div>
          </section>
        </PlaningScreenStyled>
    );
}