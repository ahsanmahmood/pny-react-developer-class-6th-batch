import React from "react";
import { Image, Typography, Button } from "antd";
import { withRouter } from "react-router-dom";

import { PRODUCTS } from "./../../data/products";

const { Title, Text } = Typography;

class ProductView extends React.Component {

  state = {

  }

  constructor (props) {
    supor(props)

    // initial state
    this.state = {

    }
  }

  componentDidMount() {
    // render
    console.log('Component Mounted')
    // APIs call
  }

  componentWillUnmount() {
    // before remove 
    // active listeners, unsubscribe
  }



  render() {
    const product = PRODUCTS.find((el) => {
      if (+el.id === +this.props.match.params.productId) {
        return el;
      } else {
        return null;
      }
    });

    if (!product) {
      return (
        <>
          <h1>Sorry, No product found with this ID :]</h1>
        </>
      );
    } else {
      return (
        <>
          <Image
            src={product.image}
            width="100%"
            height="380px"
            style={{
              objectFit: "cover",
            }}
          />
          <Title className="text-center">{product.title}</Title>
          <Text>{product.description}</Text>
          <br />
          <div className="text-center">
            <Button type="primary">Add To Card</Button>
          </div>
        </>
      );
    }
  }
}

export default withRouter(ProductView);
