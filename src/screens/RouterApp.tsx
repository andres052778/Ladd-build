import {Navigate, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {
    Building, Calculations, Certificate,
    ChiefArchitect, Colaborations, Elevation,
    Energy,
    Home,
    Landing, Plan,
    Planning,
    ScreenMenu, Services, Site,
    Structural,
    Vertex,
    Wood
} from "./indexRouter.ts";

export default function RouterApp(): JSX.Element {

    return (
        <Suspense fallback={ <h1> Esta Cargando...</h1>}>
            <Routes>
                <Route path="/home" Component={Home}>
                    <Route path="menu" Component={ScreenMenu}/>
                    <Route path="energy" Component={Energy}/>
                    <Route path="vertex" Component={Vertex}/>
                    <Route path="structural" Component={Structural}/>
                    <Route path="chief" Component={ChiefArchitect}/>
                    <Route path="wood" Component={Wood}/>
                    <Route path="planing" Component={Planning}/>
                    <Route path="building" Component={Building}/>
                    <Route path="land" Component={Landing}/>
                    <Route path="plan" Component={Plan}/>
                    <Route path="elevations" Component={Elevation}/>
                    <Route path="site" Component={Site}/>
                    <Route path="calculations" Component={Calculations}/>
                    <Route path="certificate" Component={Certificate}/>
                    <Route path="collaboration" Component={Colaborations}/>
                    <Route path="services" Component={Services}/>
                    <Route index element={<Navigate to="menu"/>}/>
                </Route>
                <Route path="/" element={<Navigate to="/home/menu"/>} />
            </Routes>
        </Suspense>

    );
}
