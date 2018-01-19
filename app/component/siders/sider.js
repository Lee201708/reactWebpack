import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './sider.css';
const { Header, Content, Footer, Sider } = Layout;

export default class Siders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed : false,
        }
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                       collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}
                >
                    <div className="logo"><h3 style={{color: 'white'}}>this is a demo</h3></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o" />
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o" />
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team" />
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="16">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                        <Menu.Item key="17">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            ...
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                            long
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}