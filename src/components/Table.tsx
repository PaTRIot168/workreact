import React from "react";
import {TableItemType} from "../Type";
import styled from "styled-components";
import pain from "../assets/pain.svg";

const Inter = styled.div`
  right: 10px;
  top: 45px;
  >img{
    width: 15px;
    height: 15px;
  }
`

interface TableItemProps {
    item: TableItemType;
}

const TableItem: React.FC<TableItemProps> = ({ item }) => {
    return (
        <div className="flex">
            <p>{item.id}</p>
            <p>{item.barcode}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.amount}</p>
            <p>{item.sdate}</p>
           <p>
               <Inter  ><img src={pain}/></Inter>
               <Inter  ><img src={pain}/></Inter>
           </p>
        </div>
    );
};

interface TableProps {
    data: TableItemType[] | [];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="table full">
            <div className="flex colored">
                <h2>ID</h2>
                <h2>BARCODE</h2>
                <h2>NAME</h2>
                <h2>PRICE</h2>
                <h2>AMOUNT</h2>
                <h2>SEND DATE</h2>
            </div>
            {data.map((item) => (
                <TableItem item={item} />
            ))}
        </div>
    );
};

export default Table;
