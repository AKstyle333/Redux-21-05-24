export const product_reducers = (state = { product_name: "LAPTOP", product_price: 100 }, action) => {
    if (action.type === "ADD") {
        return { ...state, product_price: state.product_price + action.payload };
    } else if (action.type === "SUBTRACT") {
        return { ...state, product_price: state.product_price - action.payload };
    } else if (action.type === "DIVIDE") {
        return { ...state, product_price: state.product_price / action.payload };
    } else if (action.type === "MULTIPLY") {
        return { ...state, product_price: state.product_price * action.payload };
    } else {
        return state;
    }
};
