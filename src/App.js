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
        {/* <Header>
          <Button
            type="primary"
            onClick={this.toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Header> */}
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
