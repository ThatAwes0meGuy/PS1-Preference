import React from 'react'
import './App.css';
import {Table, Tag} from 'antd';

export default function MyData(rawData) {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
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
         <Table columns={columns} dataSource={rawData.data}/>
        </div>
    )
}
