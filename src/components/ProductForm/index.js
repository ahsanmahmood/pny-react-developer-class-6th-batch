import React, { useState, useEffect } from 'react'
import { Form as AntdForm, Input, Typography, Spin, notification } from 'antd'
import { Formik, Form } from 'formik'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { productActions } from './../../store/actions'
import { ROUTES } from './../../utils'

const ProductForm = () => {
  const history = useHistory()
  const params = useParams()
  const [mode, setMode] = useState('create')
  const [selectedProduct, setSelectedProduct] = useState({})
  const dispatch = useDispatch()
  const products = useSelector(state => state.productR.products)
  const productsProcessing = useSelector(state => state.productR.processing)

  useEffect(() => {
    dispatch(productActions.fetchProductsAction())
  }, [])

  useEffect(() => {
    if (params.productEditId) {
      if (products && products.length > 0) {
        const product = products.find(el => el.id === params.productEditId)
        setMode('edit')
        setSelectedProduct(product)
      }
    } else {
      setMode('create')
    }

    return () => {}
  }, [params, products])

  const formSubmitHandler = async (values, resetForm) => {
    const payload = {
      product: { id: selectedProduct.id, ...values }
    }
    if (mode === 'create') {
      await dispatch(productActions.createProductAction(payload))
      notification['success']({
        message: 'Product Created',
        description: 'Product created successfully.'
      })
    } else {
      await dispatch(productActions.updateProduct(payload))
      notification['info']({
        message: 'Product Updated',
        description: 'Product Updated Successfully.'
      })
    }
    if (resetForm) {
      resetForm()
    }
    history.push(ROUTES.HOME)
  }

  return (
    <Spin spinning={productsProcessing}>
      <Typography.Title>
        {mode === 'create' ? 'Create Product' : 'Edit Product'}
      </Typography.Title>
      <Formik
        initialValues={{
          title: selectedProduct.title,
          description: selectedProduct.description,
          image: selectedProduct.image,
          category: selectedProduct.category
        }}
        validate={values => {
          const errors = {}

          // object 'type', loop condition

          // title validation
          if (!values.title) {
            errors.title = 'Title is Required.'
          }

          //   description validation
          if (!values.description) {
            errors.description = 'Description is Required.'
          }

          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          formSubmitHandler(values, resetForm)
        }}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <AntdForm.Item label='Title'>
              <Input
                type='text'
                name='title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
            </AntdForm.Item>
            <AntdForm.Item label='description'>
              <Input
                type='text'
                name='description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </AntdForm.Item>
            <AntdForm.Item label='Image'>
              <Input
                type='text'
                name='image'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              {errors.image && touched.image && errors.image}
            </AntdForm.Item>
            <AntdForm.Item label='Category'>
              <Input
                type='text'
                name='category'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              {errors.category && touched.category && errors.category}
            </AntdForm.Item>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </Spin>
  )
}

export default ProductForm
