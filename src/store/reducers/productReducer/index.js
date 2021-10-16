import * as ACTION_TYPES from './../../actionTypes'

import { PRODUCTS } from './../../../data/products'

const initialState = {
  products: PRODUCTS,
  processing: false,
  productError: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return fetchProductsFun(state, action)

    case ACTION_TYPES.GET_PRODUCTS:
      return getProductsFun(state, action)

    case ACTION_TYPES.SET_PRODUCTS:
      return setProductsFun(state, action)

    case ACTION_TYPES.GET_PRODUCT:
      return getProductFun(state, action)

    case ACTION_TYPES.DELETE_PRODUCT:
      return deleteProductFun(state, action)

    default:
      return state
  }
}

const fetchProductsFun = (state, action) => {
  const updatedState = { ...state, processing: true, productError: false }
  return updatedState
}

const getProductsFun = (state, action) => {
  const updatedState = { ...state, processing: false, productError: false }
  return updatedState
}

const setProductsFun = (state, action) => {
  const updatedState = { ...state, processing: false, productError: false }
  return updatedState
}

const getProductFun = (state, action) => {
  const updatedState = { ...state, processing: false, productError: false }
  return updatedState
}

const deleteProductFun = (state, action) => {
  const productId = action.payload.productId
  if (!productId) {
    alert('Product id is required to delete product.')
    return state
  } else {
    const updatedProducts = state.products.filter(el => +el.id !== +productId)
    const updatedState = {
      ...state,
      processing: false,
      productError: false,
      products: updatedProducts
    }
    return updatedState
  }
}

export default productReducer
