import * as ACTION_TYPES from './../../actionTypes'

const initialState = {
  products: [],
  processing: false,
  productError: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return fetchProductsFun(state, action)

    case ACTION_TYPES.CREATE_PRODUCT:
      return createProductFun(state, action)

    case ACTION_TYPES.PROCESSING_PRODUCTS_START:
      return processingProductStart(state, action)

    case ACTION_TYPES.PROCESSING_PRODUCTS_FINISHED:
      return processingProductFinished(state, action)

    case ACTION_TYPES.UPDATE_PRODUCT:
      return updateProduct(state, action)

    default:
      return state
  }
}

const processingProductStart = (state, action) => {
  return { ...state, processing: true }
}

const processingProductFinished = (state, action) => {
  return { ...state, processing: false }
}

const fetchProductsFun = (state, action) => {
  const products = action.payload.products
  return { ...state, products }
}

const createProductFun = (state, action) => {
  const product = action.payload.product
  const updatedProducts = [...state.products]
  updatedProducts.push(product)
  return { ...state, processing: false, products: updatedProducts }
}

const updateProduct = (state, action) => {
  const updatedProduct = action.payload.product
  const oldProducts = [...state.products]
  const updatedProducts = oldProducts.filter(el => el.id !== updatedProduct.id)
  updatedProducts.push(updatedProduct)
  return { ...state, processing: false, products: updatedProducts }
}

export default productReducer

// get - collection url, will return whole collection
// post - collection url, will create item in collection
// put - collection url (with item identifier), will update item in collection
// delete - collection url (with item identifier), will delete item from collection
