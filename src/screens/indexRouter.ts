import {lazy} from "react";

export const Home = lazy(() => import('./HomeScreen/HomeScreen.tsx'));
export const ScreenMenu = lazy(() => import('./MenuScreen/MenuScreen.tsx'));
export const Energy = lazy(() => import('./EnergyScreen/EnergyScreen.tsx'));
export const Vertex = lazy(() => import('./VertexScreen/VertexScreen.tsx'));
export const Structural = lazy(() => import('./StructuralScreen/StructuralScreen.tsx'));
export const ChiefArchitect = lazy(() => import('./ChiefArchitectScreen/ChiefArchitectScreen.tsx'));
export const Wood = lazy(() => import('./WoodScreen/WoodScreen.tsx'));
export const Planning = lazy(() => import('./PlaningScreen/PlaningScreen.tsx'));
export const Building = lazy(() => import('./BuildingScreen/BuildingScreen.tsx'));
export const Landing = lazy(() => import('./LandScapingScreen/LandScapingScreen.tsx'));
export const Plan = lazy(() => import('./PlanScreen/PlanScreen.tsx'));
export const Elevation = lazy(() => import('./ElevationScreen/ElevationScreen.tsx'));
export const Site = lazy(() => import('./SitePlanScreen/SitePlanScreen.tsx'));
export const Calculations = lazy(() => import('./CacultationsScreen/CalculationsScreen.tsx'));
export const Certificate = lazy(() => import('./CertificateScreen/CertificateScreen.tsx'));
export const Colaborations = lazy(() => import('./CollaborationScreen/CollaborationScreen.tsx'));
export const Services = lazy(() => import('./ServicesScreen/ServicesScreen.tsx'));