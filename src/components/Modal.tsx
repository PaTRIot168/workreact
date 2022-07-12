import React, {useRef, useState} from "react";
import {TableItemType} from "../Type";


interface Props {
    setData: (newData: TableItemType) => void;
    iddd: number;
}



const Modal: React.FC<Props> = ({ setData,iddd }) => {
    // const idRef = useRef<any>(null);
    const barcodeRef = useRef<any>(null);
    const nameRef = useRef<any>(null);
    const priceRef = useRef<any>(null);
    const amountRef = useRef<any>(null);
    const sdateRef = useRef<any>(null);

    const onClick = () => {
        setData({ id: iddd, barcode: barcodeRef.current.value, name: nameRef.current.value, price: priceRef.current.value, amount: amountRef.current.value, sdate: sdateRef.current.value });
    };

    return (
        <div className="modal-wrapper">
            <div className="modal-container">
                <input placeholder="Barcode" ref={barcodeRef} />
                <input placeholder="Name" ref={nameRef} />
                <input placeholder="Price" ref={priceRef} />
                <input placeholder="Amount" ref={amountRef} />
                <input placeholder="Sand Date" ref={sdateRef} />
                <button onClick={onClick}>Добавить запись</button>
            </div>
        </div>
    );
};

export default Modal;
