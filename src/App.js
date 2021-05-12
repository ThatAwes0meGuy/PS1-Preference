import './App.css';
import { Input, Space, Layout } from 'antd';
import { Menu, Breadcrumb, Card, Badge  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SearchOutlined } from '@ant-design/icons';


function App() {
  const { Search } = Input;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;


  return (
    <div className="App">
     <Layout>
       <Header className="header">
       
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
       </Header>
       <Layout>
         <Sider width={300}>
         {/* <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          </Menu> */}
          <Card title="FILTER BY INDUSTRY">
          
            <Space direction="vertical">
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            </Space>
          
          </Card>
          <Card title="FILTER BY BRANCH">
          <Space direction="vertical">
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            <Space direction="horizontal">
              <Badge count={"IT"}/>
              <Badge count={"ELECTRONICS"}/>
              <Badge count={"ELECTRONICS"}/>
            </Space>
            </Space>
          
          </Card>
         </Sider>
         <Content>
        
              <Search placeholder="Eg: Machine Learning"  width = {300} size="large" enterButton prefix={<SearchOutlined/>} />

         </Content>
       </Layout>
       <Footer></Footer>
     </Layout>
    </div>
  );
}

export default App;
