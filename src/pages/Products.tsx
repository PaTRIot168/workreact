import { useState } from "react";
import '../Styles.css'
import Table from "../components/Table";
import Modal from "../components/Modal";
import {TableItemType} from "../Type";
import styled from "styled-components";



const Butt = styled.button`
  width: 173px;
  height: 45px;
  background-color: black;
  font-family: Sarabun;
  font-size: 20px;
  color: white;
  margin-left: 97px;
  margin-bottom: 100px;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 76px;
`



const LeftContainer = styled.div`
  background-color: #131929;
  flex-basis: 23%;
  
`
export default function App() {
    const [iddd,setId] = useState(2)
    const [data, setData] = useState<TableItemType[] | []>([({id: 1, barcode: 232,name:'test', price: 422, amount: 3, sdate: '20.22.221'})]);
    const [isModalOpen, setModalOpen] = useState(false);

    const setDataHandler = (newData: TableItemType) => {

            setId(iddd+1);

        setData([...data, newData]);
        setModalOpen(false);
    };

            return (
                <div>
                <Wrapper>
                    <LeftContainer/>
                    <RightContainer>
                        <Butt  onClick={() => setModalOpen(true)}>
                            Добавить запись
                        </Butt>
                        {isModalOpen && <Modal iddd={iddd} setData={setDataHandler} />}
                        <Table data={data} />

                    </RightContainer>

                </Wrapper>
                </div>
            );

}



