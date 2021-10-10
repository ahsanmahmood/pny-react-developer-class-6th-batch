import React, { Component } from "react";
import { Col, Layout, Row } from "antd";
import { SITE_ICON } from "./assets/images";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import ProductCard from './components/ProductCard'

const { SubMenu } = Menu;

const { Header, Footer, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Content>
          <Row gutter={[16, 16]}>
            <Col sm={12}>
              <ProductCard />
            </Col>
            <Col sm={12}></Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
