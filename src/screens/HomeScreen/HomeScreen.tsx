import {HomeScreenStyled} from "./HomeScreenStyled.tsx";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.tsx";
import {Outlet} from "react-router-dom";

export default function HomeScreen():JSX.Element {
    return (
        <HomeScreenStyled>
            <HeaderComponent/>
            <Outlet/>
        </HomeScreenStyled>
    );
}
