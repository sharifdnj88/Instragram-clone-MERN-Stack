
// create a reducer
const LoaderReducers = ( state, { type, payload } ) => {
    switch (type) {
        case 'LOADER_START':
            return 100;
        case 'LOADER_END':
            return 0;
            
    
        default:
            return state;
    }
}

// export reducer
export default LoaderReducers;