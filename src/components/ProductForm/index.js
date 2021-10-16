import React, { useState, useEffect } from 'react'
import { Form as AntdForm, Input, Typography } from 'antd'
import { Formik, Form, Field } from 'formik'
import { useParams, useLocation } from 'react-router-dom'

import { PRODUCTS } from './../../data/products'
import QS from 'qs'

const ProductForm = () => {
  const params = useParams()
  const location = useLocation()
  const [mode, setMode] = useState('create')
  const [selectedProduct, setSelectedProduct] = useState({})
  const queryParams = QS.parse(location.search, { ignoreQueryPrefix: true })

  useEffect(() => {
    if (params.productEditId) {
      const product = PRODUCTS.find(el => +el.id === +params.productEditId)
      setMode('edit')
      setSelectedProduct(product)
    } else {
      setMode('create')
    }

    return () => {}
  }, [params])

  useEffect(() => {
    // APIs call

    return () => {
      // before remove
      // active listeners, unsubscribe
    }
  }, [])

  //   useEffect(() => {
  //     if (!validateEmail(counter)) {
  //       console.log("Invalid Email");
  //     } else {
  //       alert("Valid Email.");
  //     }
  //   }, [counter]);

  return (
    <>
      <Typography.Title>
        {mode === 'create' ? 'Create Product' : 'Edit Product'}
      </Typography.Title>
      <Formik
        initialValues={{
          title: selectedProduct.title || 'asdasadasd',
          description: selectedProduct.description || 'asdasdasda',
          image: '',
          tags: '',
          category: '',
          size: ''
        }}
        validate={values => {
          const errors = {}

          // title validation
          if (!values.title || values.title.length < 10) {
            errors.title = 'Title is Required.'
          }

          //   description validation
          if (!values.description) {
            errors.description = 'Description is Required.'
          }

          return errors
        }}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 400)
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
              {errors.description &&
                touched.description &&
                errors.description}{' '}
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
            <AntdForm.Item label='Tags'>
              <Input
                type='text'
                name='tags'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tags}
              />
              {errors.tags && touched.tags && errors.tags}
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
            <AntdForm.Item label='Size'>
              <Input
                type='text'
                name='size'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.size}
              />
              {errors.size && touched.size && errors.size}
            </AntdForm.Item>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ProductForm
