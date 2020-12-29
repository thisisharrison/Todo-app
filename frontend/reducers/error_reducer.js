const errorReducer = (oldState = [], action) => {
    let newState;
    Object.freeze(oldState);

    switch (action.type) {
        default:
            return oldState;
    }
}

export default errorReducer;