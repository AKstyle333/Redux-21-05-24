import React from "react";
import Child from "./State/Child"
import { useDispatch, useSelector } from "react-redux";
import { product_Actions } from "./State/Actions";

const App = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.product);

    return (
        <>
            <div className="text-center">
                <h1>App</h1>
                <h1>{productData.product_price}</h1>

                <button
                    className="btn btn-success "
                    onClick={() => {
                        dispatch(product_Actions.product_add(10));
                    }}
                >
                    INCREASE +
                </button>
                <button
                    className="btn ms-3 btn-danger"
                    onClick={() => {
                        dispatch(product_Actions.product_subtract(10));
                    }}
                >
                    DECREASE -
                </button>
                <button
                    className="btn ms-3 btn-secondary"
                    onClick={() => {
                        dispatch(product_Actions.product_divide(10));
                    }}
                >
                    DIVIDE /
                </button>
                <button
                    className="btn ms-3 btn-warning"
                    onClick={() => {
                        dispatch(product_Actions.product_multiply(10));
                    }}
                >
                    MULTIPLY *
                </button>
                <p>=================================================================================================================</p>
                <Child />
            </div>
        </>
    );
};

export default App;
