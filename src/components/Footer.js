import React from "react";
import { Space, Layout, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <div>
      <Layout.Footer>
        <Space direction="horizontal">
          <GithubOutlined
            spin="true"
            onClick={() =>
              (window.location = "https://github.com/Ashish-AVS/PS1-Preference")
            }
          />
          <Typography.Text type="secondary">Ashish AVS</Typography.Text>
        </Space>
      </Layout.Footer>
    </div>
  );
}
