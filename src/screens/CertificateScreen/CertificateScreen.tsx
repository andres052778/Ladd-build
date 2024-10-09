import {CertificateScreenStyled} from "./CertificateScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function CertificateScreen():JSX.Element {
    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }
    return (
        <CertificateScreenStyled>
            <section onClick={() => handledCloseSidebar('')}>
                <video className="videobackground" loop muted autoPlay src="/img/energy%20certificated.mp4"> </video>
                <div className="img-container">
                    <img className="certificated" alt="certificated-img" src="/img/cheers.png"/>
                    <img className="cheers-certificated" alt="cheers-img" src="/img/cheers%20ca.png"/>
                </div>
                <div className="info-container">
                    <h1> ENERGETIC CERTIFICATION</h1>
                    <pre>"We have the backing and certifications necessary from the company CHEERS, which is accepted by the California Energy Commission. We assure you full compliance with the requirements necessary to make your home energy efficient." </pre>
                    <pre>"We can ensure that your projects, additions, modifications, or your entire home fully comply with established energy requirements."</pre>
                </div>
            </section>
        </CertificateScreenStyled>
    );
}