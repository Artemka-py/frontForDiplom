import React from 'react';
import {Layout, Menu} from "antd";
import {Footer} from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Redirect } from 'react-router'
import '../App.css';

const { Header, Content } = Layout;

class Master extends React.Component {
  render() {
  return (
      <Layout>
        <Header className="header">
          <div className="logo"/>
          <Menu theme="dark" style={{color: '#fff'}} mode="horizontal" defaultSelectedKeys={[this.props.location]}>
            <Menu.Item key="1"><NavLink to="/">Главная</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/admin" exact={true} render={() => (<Redirect to="/http://localhost:8000" />)}>Административная панель</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/about">О сайте</NavLink></Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{padding: '0 24px 24px'}}>
            <hr/>
            <hr/>
            <Content
              className="site-layout-background"
              style={{
                padding: 40,
                margin: 0,
                minHeight: 280,
              }}
            >
              <main>{this.props.children}</main>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{textAlign: 'end'}}>
          &#169;Lytkin
        </Footer>
      </Layout>
  )}
}

export default Master;