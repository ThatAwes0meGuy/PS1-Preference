import "./App.css";
import { useState, useEffect } from "react";
import { Input, Space, Layout } from "antd";
import { Menu, Tag, Button, Typography } from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  GithubOutlined,
  DesktopOutlined,
  FilterOutlined,
  TeamOutlined
} from "@ant-design/icons";
import axios from "axios";
import Fuse from "fuse.js";
import MyData from "./MyData";
import { CSVLink } from "react-csv";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from "./Loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {branch, industry, colors} from './constants.js';
import Head from "./components/Head";

function App() {
  const { Search } = Input;
  const { Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [branchQuery, setBranchQuery] = useState([]);
  const [loader, setLoader] = useState(true);
  const [theme, themeHandler] = useState("light");
  const [placeholder, setPlaceholder] = useState();

  //https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json"
      )
      .then((res) => {
        setData(res.data);
        setLoader(false);
        animatePlaceholder("Ex: Machine Learning....")
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
    matchAllTokens: true,
    keys: ["name", "industry", "location", "branches"],
  };
  const branchFuse = new Fuse(data, {
    keys: ["branches", "industry"],
    tokenize: false,
    threshold: 0.6,
  });
  let branchResults;
  branchQuery.map((el) => {
    branchResults = branchFuse.search(el);
  });
  let branchDataResults = branchQuery.length
    ? branchResults.map((result) => result.item)
    : data;

  const fuse = new Fuse(branchDataResults, options);
  const results = fuse.search(query);
  let dataResults = query
    ? results.map((result) => result.item)
    : branchDataResults;

  const queryHandler = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

  const filterHandler = (branch) => {
    setBranchQuery((prev) => [...prev, branch]);
    console.log(branchQuery);
    // setQuery(prevQ => prevQ + " " + branch)
          
  }
  const animatePlaceholder = (ph) => {
    console.log("FUNCTION CALLED")
    let phCount = 0;
    setPlaceholder("");
    function printLetter(string) {
      let arr = string.split('');
      let origString = string;
    setTimeout(function(){
      setPlaceholder(prevState => prevState + arr[phCount]);
      phCount++;
      if (phCount < arr.length) {
        printLetter(origString);
      }
    }, 100);
    }   
    printLetter(ph);
}
  return (
    <Router>
      <div>
          <Layout> <Head /> <Layout>
            <Sider
              width={300}
              style={{ marginLeft: "50px", marginTop: "92px" }}
              className={theme}
            >
              <Menu
                defaultOpenKeys={["sub1", "sub2", "sub3"]}
                mode="inline"
                theme={theme}
              >
                <Menu.Item key="1" icon={<FilterOutlined />}>
                  Filters
                </Menu.Item>
                <SubMenu key="sub1" icon={<DesktopOutlined />} title="Branch">
                  <div style={{ marginLeft: "23px" }}>
                    {branch.map((el, index) => (
                      <Tag
                        key={index}
                        onClick={() => filterHandler(el)}
                        color={colors[index]}
                        style={{ marginBottom: "10px" }}
                      >
                        <Typography.Text type="secondary">{el}</Typography.Text>
                      </Tag>
                    ))}
                  </div>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Industry">
                  <div style={{ marginLeft: "23px" }}>
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
                  </div>
                </SubMenu>

                <SubMenu
                  key="sub3"
                  icon={<DownloadOutlined />}
                  title="Download as CSV"
                >
                  <div style={{ margin: "23px", marginLeft: "28px" }}>
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      size="large"
                    >
                      <CSVLink data={dataResults}>
                        <span style={{ color: "#fff" }}>Download as CSV</span>
                      </CSVLink>
                    </Button>
                  </div>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "20px 50px" }}>
              <Search
                placeholder={placeholder}
                width={300}
                size="large"
                enterButton
                prefix={<SearchOutlined />}
                onChange={queryHandler}
                value={query}
                style={{ padding: "18px 0" }}
              />
              
              {loader ? (
                <Loading />
              ) : (
                <Route
                  path="/PS1-Preference/search-stations"
                  exact
                  component={() => <MyData data={dataResults} />}
                />
              )}
            </Content>
          </Layout>
          <Footer>
            <Space direction="horizontal">
              <GithubOutlined
                spin="true"
                onClick={() =>
                  (window.location =
                    "https://github.com/Ashish-AVS/PS1-Preference")
                }
              />
              <Typography.Text type="secondary">Ashish AVS</Typography.Text>
            </Space>
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
