import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductCard from './../../components/ProductCard'

const { Content } = Layout

const Home = () => {
  const products = useSelector(state => state.productR.products)

  return (
    <>
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
    </>
  )
}

export default Home
