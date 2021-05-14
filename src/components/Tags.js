import React from 'react'
import {Tag} from "antd";

export default function Tags() {
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
    return (
        <div style={{ marginLeft: "23px" }}>
        {branch.map((el, index) => (
            <Tag
            key={index}
            color={colors[index] + "-inverse"}
            style={{ marginBottom: "10px" }}
            >
            {el}
            </Tag>
        ))}
        </div>
    )
}
