import React, {useState} from 'react'
import { Menu, Switch, Layout } from "antd";
import {Link} from 'react-router-dom';
import {HomeOutlined,CloudOutlined,FireOutlined} from "@ant-design/icons";

const Head = () => {
    const [theme, themeHandler] = useState("light");

    return (
        <div>
            <Layout.Header style={{ backgroundColor: "#f0f2F5" }}>
            <Menu mode="horizontal" theme={theme} defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/PS1-Preference">
                  <HomeOutlined style={{ marginLeft: "10px" }} />
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/PS1-Preference/search-stations">Search Stations</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/PS1-Preference/view-preferences">View Preferences</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/PS1-Preference/show-stations">Show Stations</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Switch
                  checkedChildren={<FireOutlined />}
                  unCheckedChildren={<CloudOutlined />}
                  defaultChecked
                  onClick={() =>
                    themeHandler((prev) =>
                      prev === "light" ? "dark" : "light"
                    )
                  }
                  style={{}}
                />
              </Menu.Item>
            </Menu>
          </Layout.Header>
        </div>
    )
}

export default Head;
/*

<Header style={{ backgroundColor: "#f0f2F5" }}>
            <Menu mode="horizontal" theme={theme} defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/PS1-Preference">
                  <HomeOutlined style={{ marginLeft: "10px" }} />
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/PS1-Preference/search-stations">Search Stations</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/PS1-Preference/view-preferences">View Preferences</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/PS1-Preference/show-stations">Show Stations</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Switch
                  checkedChildren={<FireOutlined />}
                  unCheckedChildren={<CloudOutlined />}
                  defaultChecked
                  onClick={() =>
                    themeHandler((prev) =>
                      prev === "light" ? "dark" : "light"
                    )
                  }
                  style={{}}
                />
              </Menu.Item>
            </Menu>
          </Header>

*/