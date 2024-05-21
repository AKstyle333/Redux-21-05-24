const number_name = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: data,
        });
    };
};

const number_name2 = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SUBTRACT",
            payload: data,
        });
    };
};

const number_name3 = (data) => {
    return (dispatch) => {
        dispatch({
            type: "DIVIDE",
            payload: data,
        });
    };
};

const number_name4 = (data) => {
    return (dispatch) => {
        dispatch({
            type: "MULTIPLY",
            payload: data,
        });
    };
};
export { number_name, number_name2, number_name3, number_name4 };
