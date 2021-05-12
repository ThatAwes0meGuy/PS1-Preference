import './App.css';
import {useState, useEffect} from 'react';
import { Input, Space, Layout } from 'antd';
import { Menu, Breadcrumb, Card, Badge,  Table, Tag, Divider } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import MyData from './MyData'

function App() {
  const { Search } = Input;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [data, setData] = useState([]);
  //https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json")
    .then(res => setData(res.data));
  }, [])

  return (
    <div className="App">
     <Layout>
       <Header className="header">  
        <h1 style={{color:"#fffbe6"}}>PS1 HELPER</h1>
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
          <Layout>
          <Card title="FILTER BY BRANCH">
          <Tag color="magenta">magenta</Tag>
              <Tag color="red">red</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="orange">orange</Tag>
              <Tag color="gold">gold</Tag>
              <Tag color="lime">lime</Tag>
              <Tag color="green">green</Tag>
              <Tag color="cyan">cyan</Tag>
              <Tag color="blue">blue</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Tag color="purple">purple</Tag>    
          </Card> 

          <Card title="FILTER BY INDUSTRY">
             <Tag color="magenta-inverse">magenta</Tag>
            <Tag color="red-inverse">red</Tag>
            <Tag color="volcano-inverse">volcano</Tag>
            <Tag color="orange-inverse">orange</Tag>
            <Tag color="gold-inverse">gold</Tag>
            <Tag color="lime-inverse">lime</Tag>
            <Tag color="green-inverse">green</Tag>
            <Tag color="cyan-inverse">cyan</Tag>
            <Tag color="blue-inverse">blue</Tag>
            <Tag color="geekblue-inverse">geekblue</Tag>
            <Tag color="purple-inverse">purple</Tag>      
          </Card> 
          </Layout>
         </Sider>
         <Content>
          <Search placeholder="Eg: Machine Learning"  width = {300} size="large" enterButton prefix={<SearchOutlined/>} />
           <MyData data={data}/>
         </Content>
       </Layout>
       <Footer></Footer>
     </Layout>
    </div>
  );
}

export default App;
