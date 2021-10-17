import * as ACTION_TYPES from './../../actionTypes'
import axios from 'axios'
import { CONSTANTS } from './../../../utils'

const firebaseProductsCollectionBaseUrl = `${CONSTANTS.FIREBASE_BASE_URL}/${CONSTANTS.PRODUCTS_COLLECTION_NAME}`

const processingProductsStart = () => {
  return {
    type: ACTION_TYPES.PROCESSING_PRODUCTS_START
  }
}

const processingProductsFinished = () => {
  return {
    type: ACTION_TYPES.PROCESSING_PRODUCTS_FINISHED
  }
}

export const fetchProductsAction = () => {
  return async (dispatch, getStore) => {
    // const store = getStore() // to get current store value

    dispatch(processingProductsStart())

    const res = await axios.get(firebaseProductsCollectionBaseUrl)
    const productsData = res.data
    const fetchedProducts = []
    for (const productId in productsData) {
      if (Object.hasOwnProperty.call(productsData, productId)) {
        const productData = productsData[productId]
        const finalProduct = { id: productId, ...productData }
        fetchedProducts.push(finalProduct)
      }
    }
    dispatch({
      type: ACTION_TYPES.FETCH_PRODUCTS,
      payload: {
        products: fetchedProducts
      }
    })
    dispatch(processingProductsFinished())
  }
}

export const deleteProductAction = payload => {
  return async (dispatch, getStore) => {
    dispatch(processingProductsStart())
    const productId = payload.productId
    const deleteUrl = `${
      CONSTANTS.FIREBASE_BASE_URL
    }/${CONSTANTS.PRODUCTS_COLLECTION_ITEM_URL(productId)}`
    const res = await axios.delete(deleteUrl)

    console.log('delete product api, res: ', res) //  res - mean response

    dispatch(fetchProductsAction())
    dispatch(processingProductsFinished())
  }
}

export const createProductAction = payload => {
  return async (dispatch, getStore) => {
    try {
      dispatch(processingProductsStart())

      const product = payload.product
      const res = await axios.post(firebaseProductsCollectionBaseUrl, product)
      const productId = res.data.name
      const finalProduct = { id: productId, ...product }
      const finalPayload = { product: finalProduct }
      dispatch({
        type: ACTION_TYPES.CREATE_PRODUCT,
        payload: finalPayload
      })
      dispatch(processingProductsFinished())
    } catch (error) {
      alert('Error occured while creating product.')
    }
  }
}
export const updateProduct = payload => {
  return async dispatch => {
    dispatch(processingProductsStart())

    const updatedProduct = payload.product
    const productId = updatedProduct.id
    delete updatedProduct.id // object key delete
    const updateUrl = `${
      CONSTANTS.FIREBASE_BASE_URL
    }/${CONSTANTS.PRODUCTS_COLLECTION_ITEM_URL(productId)}`

    const res = await axios.put(updateUrl, updatedProduct)
    console.log('res: ', res)

    dispatch({
      type: ACTION_TYPES.UPDATE_PRODUCT,
      payload
    })
    dispatch(processingProductsFinished())
  }
}
