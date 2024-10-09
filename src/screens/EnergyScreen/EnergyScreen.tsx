import {EnergyScreenStyled} from "./EnergyScreenStyled.tsx";
import {useAppDispatch} from "../../hooks/HookStore.tsx";
import {menuTypeModels} from "../../Models/MenuTypeModels.tsx";
import {setOpenCloseDownMenu, setTypeDownMenu} from "../../store/Actions/modalActions.tsx";

export default function EnergyScreen():JSX.Element {
    const dispatch = useAppDispatch();

    function handledCloseSidebar(type_menu: menuTypeModels) {
        if (type_menu === '') {
            dispatch(setTypeDownMenu(''));
            dispatch(setOpenCloseDownMenu(false));
        }
    }
    return (
        <EnergyScreenStyled>
            <section  onClick={() => handledCloseSidebar('')}>
                <video className= "videobackground" loop muted autoPlay src="/img/filmewallpaperenergy.mp4"> </video>
                <div className="energypro">
                    <h1> ENERGY PRO </h1>
                    <pre className="energy-description"> {`energy pro is the leading software for modelling, analyzing, and simulating complex energy projects with cross sectional optimization including electricity, PTX, hybrid and thermal energy (such as process heat, hot water and cooling)..
                    energyPRO is used for detailed technical and financial analysis of both existing and new energy projects in a very user-friendly interface providing the user with a clear overview of the project. The software offers a long range of technical and economic reports including graphical presentation of the simulated operation which provides an overview and in-depth understanding of the dynamics in a complex energy system.The calculations are made under due consideration to any conditions specified in the project offering precise results in a printable format accepted by the World Bank and international investment banks. With its flexible and generic structure, energyPRO can be used to model virtually any type of energy plant. The possibilities are almost endless. The list below provides some examples of which analyses can be performed with the software.`}</pre>
                    <img className="energy-img" alt="energy-img" src="/img/energy-pro.png"/>
                    <img className="energy-logo" alt="energy-logo" src="/img/logo-energy.png"/>
                    <pre
                        className="energy-ladd"> {`Our service portfolio contains implementations of the software energy-pro as verify  consultants by the city of California`}
                    </pre>
                    <pre className="energy-public">
                        {`At LADD Consultants, we are constantly training and updating to take our company to a high level, and compete from the forefront with new computer tools that give us a better and more precise calculation in our projects.`}
                    </pre>
                </div>
            </section>
        </EnergyScreenStyled>
    );
}