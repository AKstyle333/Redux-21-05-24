import React from 'react'
import SubChild from './SubChild'
import { useDispatch, useSelector } from 'react-redux';
import { product_Actions } from './Actions';

const Child = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.product);

  return (
      <>
          <h1>Child</h1>
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

          <SubChild />
      </>
  );
}

export default Child