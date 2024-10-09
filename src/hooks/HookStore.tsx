import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AdminState, AppDispatch} from "../store/Store.tsx";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AdminState> = useSelector;