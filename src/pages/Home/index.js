import React, { useEffect } from 'react'
import { Breadcrumb, Layout, Spin } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from './../../store/actions'

import ProductCard from './../../components/ProductCard'

const { Content } = Layout

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productR.products)
  const productsProcessing = useSelector(state => state.productR.processing)

  useEffect(() => {
    dispatch(productActions.fetchProductsAction())
  }, [])

  return (
    <Spin spinning={productsProcessing}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to='/'>Home</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        {products &&
          products.length > 0 &&
          products.map((el, index) => {
            return <ProductCard item={el} key={index} />
          })}
        {(!products || products.length < 1) && (
          <h1>Sorry, No products found :/</h1>
        )}
      </Content>
    </Spin>
  )
}

export default Home
