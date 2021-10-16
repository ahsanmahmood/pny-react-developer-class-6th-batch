import React, { useState } from 'react'
import { Card, Modal, Typography, notification } from 'antd'
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productActions } from './../../store/actions'

const { Meta } = Card
const { Text } = Typography

const ProductCard = props => {
  const { item } = props
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const dispatch = useDispatch()

  const productDeleteHandler = product => {
    dispatch(
      productActions.deleteProductAction({
        productId: item.id
      })
    )
    notification['error']({
      message: 'Product Deleted!',
      description: 'Product deleted successfully.'
    })
    setShowDeleteModal(false)
  }

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img alt={item.title} src={item.image} />}
        actions={[
          <Link to={`/product/view/${item.id}`}>
            <EyeOutlined key='view' />
          </Link>,
          <Link to={`/product/edit/${item.id}`}>
            <EditOutlined key='edit' />
          </Link>,
          <DeleteOutlined key='view' onClick={() => setShowDeleteModal(true)} />
        ]}
        className='d-inline-block mr-14'
      >
        <Meta title={item.title} description={item.description} />
      </Card>

      <Modal
        title='Delete Product'
        visible={showDeleteModal}
        onOk={productDeleteHandler}
        onCancel={() => setShowDeleteModal(false)}
        okText='Confirm'
        cancelText='Cancel'
      >
        <Text>Do you want to delete this product?</Text>
      </Modal>
    </>
  )
}

export default ProductCard
