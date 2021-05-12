import './App.css';
import {useState, useEffect} from 'react';
import { Input, Space, Layout } from 'antd';
import { Menu,Card, Tag, Button} from 'antd';
import { SearchOutlined, DownloadOutlined  } from '@ant-design/icons';
import axios from 'axios';
import Fuse from 'fuse.js';
import MyData from './MyData';
import { CSVLink, CSVDownload } from "react-csv";


function App() {
  const { Search } = Input;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [csv, setCsv] = useState([]);
  //https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json")
    .then(res => setData(res.data));
  }, [])
  const fuse = new Fuse(data, {
      keys: [
        "name",
        "industry",
        "location",
        "branches"
      ]
  })

  const results = fuse.search(query);
  const dataResults = query ? results.map(result => result.item): data;
  const branch = ["ANY", "B1", "B2", "B3", "B4", "B5", "AA", "A1", "A2", "A3", "A4", "A5", "A7", "A8", "C6"];
  const industry = ["ELECTRONICS", "FINANCE AND MGMT", "MECHANICAL", "CHEMICAL"," CEMENT", "INFRASTRUCTURE", "IT", "COMPUTER SCIENCE", "HEALTH CARE", "GOVT RESEARCH LAB", "STEEL", "OTHERS"];
  const colors = ["magenta", "red", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]

  const queryHandler = ({currentTarget = {}}) => {
    const {value} = currentTarget;
    setQuery(value);
  }
  
  const branchHandler = (branch) => {
     console.log("HOW DO I DO THIS??")
  }
  return (
    <div>
     <Layout>
     <Header className="header">  

        <h1 style={{color:"#fffbe6"}}>PS1 HELPER</h1>

       </Header>
       <Layout>
         <Sider width={300} style={{backgroundColor:"#fff"}}>
          <Card title="FILTER BY BRANCH" >    
             { branch.map( (el, index) => 
                    <Tag key={index} onClick={(el) => branchHandler(el)} color={colors[index]} style={{marginBottom:"10px"}}>{el}</Tag>
                 )}
          </Card> 

          <Card title="FILTER BY INDUSTRY">
            { industry.map( (el, index) => 
                    <Tag key={index} color={colors[index] + "-inverse"} style={{marginBottom:"10px"}}>{el}</Tag>
                 )}  
          </Card> 
            <Button type="primary" icon={<DownloadOutlined />} size="large">
              <CSVLink data={dataResults}><span style={{color:"#fff"}}>Download as CSV</span></CSVLink>
            </Button>
            



         </Sider>
         <Content>
          <Search placeholder="Eg: Machine Learning"  width = {300} size="large" enterButton prefix={<SearchOutlined/>} onChange={queryHandler}/>
           <MyData data={dataResults}/>
         </Content>
       </Layout>
       <Footer></Footer>
     </Layout>
    </div>
  );
}

export default App;
