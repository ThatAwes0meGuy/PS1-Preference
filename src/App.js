import "./App.css";
import { useState, useEffect } from "react";
import { Input, Space, Layout } from "antd";
import { Menu, Card, Tag, Button, Typography } from "antd";
import { SearchOutlined, DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import axios from "axios";
import Fuse from "fuse.js";
import MyData from "./MyData";
import { CSVLink, CSVDownload } from "react-csv";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from './Loading';



function App() {
  const { Search } = Input;
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [csv, setCsv] = useState([]);
  const [branchQuery, setBranchQuery] = useState([]);
  const [loader, setLoader] = useState(true);

  //https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json"
      )
      .then((res) => {
        setData(res.data)
        setLoader(false);
      });
  }, []);

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.2,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    tokenize: true,
    matchAllTokens:true,
    keys: [
      "name", 
      "industry", 
      "location", 
      "branches"
    ]
  };



  // const fuse = new Fuse(data, options);
  // const results = fuse.search(query);
  // let dataResults = query ? results.map((result) => result.item) : data;

  const branchFuse = new Fuse(data, 
    {
      keys: ["branches", "industry"],
      tokenize: false,
      threshold: 0.6
    }
    );
   let branchResults;
  branchQuery.map(el => {
     branchResults = branchFuse.search(el)
  })
  let branchDataResults = branchQuery.length ? branchResults.map((result) => result.item) : data;


  const fuse = new Fuse(branchDataResults, options);
  const results = fuse.search(query);
  let dataResults = query ? results.map((result) => result.item) : branchDataResults;
  
  

  const branch = [
    "ANY",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "AA",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A7",
    "A8",
    "C6",
  ];
  const industry = [
    "ELECTRONICS",
    "FINANCE AND MGMT",
    "MECHANICAL",
    "CHEMICAL",
    " CEMENT",
    "INFRASTRUCTURE",
    "IT",
    "COMPUTER SCIENCE",
    "HEALTH CARE",
    "GOVT RESEARCH LAB",
    "STEEL",
    "OTHERS",
  ];
  const colors = [
    "magenta",
    "red",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  const queryHandler = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  const filterHandler = (branch) => {
    // console.log(dataResults);
    // setBranchQuery(prev => prev?[...prev, branch]:prev);
    // dataResults = dataResults.map(el => {
    //   if(el.branches){
    //     if(el.branches.indexOf(branch)!==-1) return el;
    //   }
    // })
    setBranchQuery(prev => [...prev, branch])
    console.log(branchQuery)
    // setQuery(prevQ => prevQ + " " + branch)

    const animatePlaceholder = () => {

    //     // your custome placeholder goes here!
    //     var ph = "Search Website e.g. \"Dancing Cats\"",
    //     searchBar = $('#search'),
    //     // placeholder loop counter
    //     phCount = 0;

    //     // function to return random number between
    //     // with min/max range
    //     function randDelay(min, max) {
    //     return Math.floor(Math.random() * (max-min+1)+min);
    //     }

    //     // function to print placeholder text in a 
    //     // 'typing' effect
    //     function printLetter(string, el) {
    //     // split string into character seperated array
    //     var arr = string.split(''),
    //       input = el,
    //       // store full placeholder
    //       origString = string,
    //       // get current placeholder value
    //       curPlace = $(input).attr("placeholder"),
    //       // append next letter to current placeholder
    //       placeholder = curPlace + arr[phCount];
          
    //     setTimeout(function(){
    //       // print placeholder text
    //       $(input).attr("placeholder", placeholder);
    //       // increase loop count
    //       phCount++;
    //       // run loop until placeholder is fully printed
    //       if (phCount < arr.length) {
    //         printLetter(origString, input);
    //       }
    //     // use random speed to simulate
    //     // 'human' typing
    //     }, randDelay(50, 90));
    //     }  

    //     // function to init animation
    //     function placeholder() {
    //     $(searchBar).attr("placeholder", "");
    //     printLetter(ph, searchBar);
    //     }

    //     placeholder();
    //     $('.submit').click(function(e){
    //     phCount = 0;
    //     e.preventDefault();
    //     placeholder();
    //     });


    }

  }
  return (
    <div>
      <Layout>
      
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Search Stations</Menu.Item>
            <Menu.Item key="2">Arrange Preferences</Menu.Item>
            <Menu.Item key="3">View Preferences</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={300} style={{ backgroundColor: "#fff" }}>
            <Card title="FILTER BY BRANCH">
              {branch.map((el, index) => (
                <Tag
                  key={index}
                  onClick={() => filterHandler(el)}
                  color={colors[index]}
                  style={{ marginBottom: "10px" }}
                >
                  {el}
                </Tag>
              ))}
            </Card>

            <Card title="FILTER BY INDUSTRY">
              {industry.map((el, index) => (
                <Tag
                  key={index}
                  color={colors[index] + "-inverse"}
                  style={{ marginBottom: "10px" }}
                  onClick={() => filterHandler(el)}
                >
                  {el}
                </Tag>
              ))}
            </Card>
            <Button type="primary" icon={<DownloadOutlined />} size="large">
              <CSVLink data={dataResults}>
                <span style={{ color: "#fff" }}>Download as CSV</span>
              </CSVLink>
            </Button>
          </Sider>
          <Content style={{ padding: '20px 50px' }}>

            <Search
              placeholder="Eg: Machine Learning"
              width={300}
              size="large"
              enterButton
              prefix={<SearchOutlined />}
              onChange={queryHandler}
              value={query}
              style={{ padding: '18px 0' }}
            />
            {loader ? <Loading /> : <MyData data={dataResults} />}
          </Content>
        </Layout>
        <Footer>
        <Space direction="horizontal">
          <GithubOutlined spin="true" onClick={() => window.location='https://github.com/Ashish-AVS/PS1-Preference'}/>
          <Typography.Text type="secondary">Ashish AVS</Typography.Text>
        </Space>
        
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
