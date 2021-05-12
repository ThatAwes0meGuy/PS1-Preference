import React, {useState} from 'react'
import './App.css';
import {Table, Tag, Modal} from 'antd';

export default function MyData(rawData) {
const [isModalVisible, setIsModalVisible] = useState(false);
const [modalContent, setModalContent] = useState(["Notjing"]);

  const showModal = (text) => {
    setIsModalVisible(true);
    rawData.data.map(el => {
        if(el.name===text){
            setModalContent(el.projects);
            // console.log(el.projects)
        }
    })
    // setModalContent(text);
    console.log(rawData)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const displayModalContent = () => {
      modalContent.map(el => modalContent)
  }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <span onClick={() => showModal(text)}>{text}</span>,
        },
        {
            title: 'Industry',
            dataIndex: 'industry',
            key: 'industry',
        },
        {
            title: 'location',
            dataIndex: 'location',
            key: 'location',
        },
        
        {
            title: 'Branches',
            dataIndex: 'branches',
            key: 'branches',
            render: branches => (
                <>
                  {branches.map(tag => {
                      let color="pink"
                     if(tag==="A7") color = "geekblue"
                     if(tag==="A3") color = "gold"
                     if(tag==="A8") color = "lime"
                     if(tag==="AA") color = "green"
                     if(tag==="Any") color = "cyan"
                     if(tag==="A4") color = "orange"
                     if(tag==="A1") color = "red"
                     if(tag==="A2") color = "magenta"
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
            )
        }
        
        ];

    return (
        <div>
         <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {
                <div>
                    {modalContent.map(proj => {
                        let projKeys = Object.keys(proj);
                        return(
                            <div style={{textAlign:"left"}}>
                                {projKeys.map(ele => <div><b>{ele.toUpperCase()}</b> : {proj[ele]}</div>)}
                                <br></br>
                             </div>
                        )
                    }
                    )}
                </div>
            }
         </Modal>
         <Table columns={columns} dataSource={rawData.data}/>
        </div>
    )
}
