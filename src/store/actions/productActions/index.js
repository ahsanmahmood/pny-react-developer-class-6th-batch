import * as ACTION_TYPES from './../../actionTypes'

export const fetchProductsAction = () => {
  return {
    type: ACTION_TYPES.FETCH_PRODUCTS
  }
}

export const getProductsAction = () => {
  return {
    type: ACTION_TYPES.GET_PRODUCTS
  }
}

export const setProductsAction = payload => {
  return {
    type: ACTION_TYPES.SET_PRODUCTS,
    payload
  }
}

export const getProductAction = payload => {
  return {
    type: ACTION_TYPES.GET_PRODUCT,
    payload
  }
}

export const deleteProductAction = payload => {
  return {
    type: ACTION_TYPES.DELETE_PRODUCT,
    payload
  }
}

export const createProductAction = payload => {
  return {
    type: ACTION_TYPES.CREATE_PRODUCT,
    payload
  }
}
