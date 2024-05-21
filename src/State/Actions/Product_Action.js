const product_add = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: data,
        });
    };
};

const product_subtract = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SUBTRACT",
            payload: data,
        });
    };
};

const product_divide = (data) => {
    return (dispatch) => {
        dispatch({
            type: "DIVIDE",
            payload: data,
        });
    };
};

const product_multiply = (data) => {
    return (dispatch) => {
        dispatch({
            type: "MULTIPLY",
            payload: data,
        });
    };
};
export { product_add, product_subtract, product_divide, product_multiply };
