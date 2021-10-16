import * as ACTION_TYPES from './../../actionTypes'

import axios from 'axios'
import { CONSTANTS } from './../../../utils'

const firebaseProductsCollectionBaseUrl = `${CONSTANTS.FIREBASE_BASE_URL}/${CONSTANTS.PRODUCTS_COLLECTION_NAME}`

const initialState = {
  products: [],
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

    case ACTION_TYPES.CREATE_PRODUCT:
      return createProductFun(state, action)

    default:
      return state
  }
}

const fetchProductsFun = async (state, action) => {
  try {
    const res = await axios.get(firebaseProductsCollectionBaseUrl)
    console.log(res)
    const productsData = res.data
    const fetchedProducts = []
    for (const productId in productsData) {
      if (Object.hasOwnProperty.call(productsData, productId)) {
        const productData = productsData[productId]
        const finalProduct = { id: productId, ...productData }
        fetchedProducts.push(finalProduct)
      }
    }
    const updatedState = {
      ...state,
      products: fetchedProducts
    }
    console.log({ fetchedProducts, productsData, updatedState })
    return updatedState
  } catch (error) {
    alert('Error occured while fetching products.')
  }
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

const createProductFun = async (state, action) => {
  try {
    const product = action.payload.product
    const res = await axios.post(firebaseProductsCollectionBaseUrl, product)
    console.log('res: ', res)
  } catch (error) {
    alert('Error occured while creating product.')
  }
}

export default productReducer

// get - collection url, will return whole collection
// post - collection url, will create item in collection
// put - collection url (with item identifier), will update item in collection
// delete - collection url (with item identifier), will delete item from collection
