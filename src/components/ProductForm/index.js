import React, { useState, useEffect } from 'react'
import { Form as AntdForm, Input, Typography, Spin } from 'antd'
import { Formik, Form } from 'formik'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { productActions } from './../../store/actions'

const ProductForm = () => {
  const params = useParams()
  const [mode, setMode] = useState('create')
  const [selectedProduct, setSelectedProduct] = useState({})
  const dispatch = useDispatch()
  const [isProcessing, setIsProcessing] = useState(false)
  const products = useSelector(state => state.productR.products)

  useEffect(() => {
    if (params.productEditId) {
      const product = products.find(el => +el.id === +params.productEditId)
      setMode('edit')
      setSelectedProduct(product)
    } else {
      setMode('create')
    }

    return () => {}
  }, [params])

  const formSubmitHandler = async (values, resetForm) => {
    setIsProcessing(true)
    const payload = {
      product: values
    }
    await dispatch(productActions.createProductAction(payload))
    setIsProcessing(false)
  }

  return (
    <Spin spinning={isProcessing}>
      <Typography.Title>
        {mode === 'create' ? 'Create Product' : 'Edit Product'}
      </Typography.Title>
      <Formik
        initialValues={{
          title: selectedProduct.title || 'first product',
          description: selectedProduct.description || 'descript....',
          image:
            'https://images.unsplash.com/photo-1634148164019-3eddb0d33fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=586&q=80',
          category: 'product'
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
              {errors.title && touched.title && errors.title}{' '}
            </AntdForm.Item>
            <AntdForm.Item label='description'>
              <Input
                type='text'
                name='description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}{' '}
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
