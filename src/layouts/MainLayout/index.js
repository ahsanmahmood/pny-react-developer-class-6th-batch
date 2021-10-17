import React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductView from '../../components/ProductView'
import ProductForm from '../../components/ProductForm'
import CLASSES from './styles.module.css'

// pages imports
import Home from './../../pages/Home'

const { Header, Sider } = Layout

const MainLayout = () => {
  return (
    <>
      <Router>
        <Layout theme='dark'>
          <Header className={CLASSES.header}>
            <div className={CLASSES.logo}></div>
            <Menu theme='light' mode='horizontal'>
              <Menu.Item key='1'>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to='/login'>Login</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to='/register'>Register</Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to='/product/create'>Create Product</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className='site-layout-background'>
              <Menu
                mode='inline'
                style={{ height: '100%', borderRight: 0 }}
                defaultSelectedKeys={[]}
              >
                <Menu.Item key='1'>
                  <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Link to='/product/create'>Create Product</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to='/login'>Login</Link>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Link to='/register'>Register</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                <Route path='/login' exact>
                  <Typography.Title>login</Typography.Title>
                </Route>
                <Route path='/register' exact>
                  <Typography.Title>register</Typography.Title>
                </Route>
                <Route path='/product/view/:productId' exact>
                  <ProductView />
                </Route>
                <Route path='/product/create' exact>
                  <ProductForm />
                </Route>
                <Route path='/product/edit/:productEditId' exact>
                  <ProductForm />
                </Route>
                <Route>
                  <Typography.Title>404</Typography.Title>
                </Route>
              </Switch>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </>
  )
}

export default MainLayout
