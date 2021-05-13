import React, { useState } from "react";
import "./App.css";
import { Table, Tag, Modal, Divider } from "antd";

export default function MyData(rawData) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(["Sphagetti Code"]);

  const showModal = (text) => {
    setIsModalVisible(true);
    rawData.data.map((el) => {
      if (el.name === text) {
        setModalContent(el.projects);
        // console.log(el.projects)
      }
    });
    // setModalContent(text);
    console.log(rawData);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span onClick={() => showModal(text)}>{text}</span>,
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "location",
      dataIndex: "location",
      key: "location",
    },

    {
      title: "Branches",
      dataIndex: "branches",
      key: "branches",
      render: (branches) => (
        <div>
          {branches.map((tag) => {
            let color = "pink";
            if (tag === "A7") color = "geekblue";
            if (tag === "A3") color = "gold";
            if (tag === "A8") color = "lime";
            if (tag === "AA") color = "green";
            if (tag === "Any") color = "cyan";
            if (tag === "A4") color = "orange";
            if (tag === "A1") color = "red";
            if (tag === "A2") color = "magenta";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      ),
    },
  ];
  const colors = [
    "#ff4d4f",
    "#ffd666",
    "#ffc53d",
    "#ffec3d",
    "#f759ab",
    "#9254de",
    "#0050b3",
    "#ffa940",
    "#ffc53d",
    "#bae637",
    "#52c41a",
    "#006d75"    
  ]
  return (
    <div>
      <Modal
        title="Project Description"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {
          <div>
            {modalContent.map((proj, index) => {
              let projKeys = Object.keys(proj);
              return (
                <div style={{ textAlign: "left" }}>
                  <Divider orientation="left"> <Tag color={colors[Math.floor((Math.random() * 10) + 1)]}>Project #{index + 1}</Tag></Divider>
                  {projKeys.map((ele) => (
                    <div>
                      <b>{ele.toUpperCase()}</b> : {proj[ele]}
                    </div>
                  ))}
                  <br></br>
                </div>
              );
            })}
          </div>
        }
      </Modal>
      <Table columns={columns} dataSource={rawData.data} />
    </div>
  );
}
