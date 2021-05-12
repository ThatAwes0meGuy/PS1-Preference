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
  const branch = ["ANY", "B1", "B2", "B3", "B4", "B5", "AA", "A1", "A2", "A3", "A4", "A5", "A7", "A8", "C6"];
  const industry = ["ELECTRONICS", "FINANCE AND MGMT", "MECHANICAL", "CHEMICAL"," CEMENT", "INFRASTRUCTURE", "IT", "COMPUTER SCIENCE", "HEALTH CARE", "GOVT RESEARCH LAB", "STEEL", "OTHERS"];
  return (
    <div>
     <Layout>
     <Header className="header">  

        <h1 style={{color:"#fffbe6"}}>PS1 HELPER</h1>

       </Header>
       <Layout>
         <Sider width={300} style={{backgroundColor:"#fff"}}>
    
          <Card title="FILTER BY BRANCH" >
             <Tag color="magenta" style={{marginBottom:"10px"}}>AA</Tag>
              <Tag color="red">A1</Tag>
              <Tag color="volcano">A2</Tag>
              <Tag color="orange">A3</Tag>
              <Tag color="gold">A4</Tag>
              <Tag color="lime">A7</Tag>
              <Tag color="green">A8</Tag>
              <Tag color="cyan">B1</Tag>
              <Tag color="blue">B2</Tag>
              <Tag color="geekblue">B3</Tag>
              <Tag color="purple">B5</Tag>     
          </Card> 

          <Card title="FILTER BY INDUSTRY">
            <Tag color="magenta-inverse" style={{marginBottom:"10px"}}>ELECTRONICS</Tag>
            <Tag color="red-inverse">FINANCE AND MGMT</Tag>
            <Tag color="volcano-inverse">MECHANICAL</Tag>
            <Tag color="orange-inverse" style={{marginBottom:"10px"}}>CHEMICAL</Tag>
            <Tag color="gold-inverse">gold</Tag>
            <Tag color="lime-inverse" style={{marginBottom:"10px"}}>lime</Tag>
            <Tag color="green-inverse" style={{marginBottom:"10px"}}>green</Tag>
            <Tag color="cyan-inverse">cyan</Tag>
            <Tag color="blue-inverse">blue</Tag>
            <Tag color="geekblue-inverse">geekblue</Tag>
            <Tag color="purple-inverse">purple</Tag>      
          </Card> 
          
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
