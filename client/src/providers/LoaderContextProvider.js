import { useReducer } from "react";
import LoaderContext from "../context/LoaderContext";
import LoaderReducers from "../reducers/LoaderReducers";

// initial State
const INITIAL_STATE = 0;

// create a provider
const LoaderContextProvider = ({ children }) => {

    const [ loaderState, loaderDispatch ] = useReducer( LoaderReducers, INITIAL_STATE );

    return (
        <LoaderContext.Provider value={{
            loaderState,
            loaderDispatch
        }} >
            { children }
        </LoaderContext.Provider>
    );
}

// export default
export default LoaderContextProvider;