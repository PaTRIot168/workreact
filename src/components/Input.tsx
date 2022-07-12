import React, {useState} from "react";
import styled from "styled-components";
// @ts-ignore
import eye from "../assets/eye.svg"

const Container = styled.div`
position: relative;
  width: fit-content;
`

const InputContainer = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  display: block;
  line-height: 20px;
  padding: 15px 0;
  font-size: 30px;
  width: 463px;
  margin-top: 17px;
`

const ShowPassword = styled.div`
  position: absolute;
  right: 10px;
  top: 45px;
  >img{
    width: 25px;
    height: auto;
  }
`

interface Props{
    placeholder:string;
    type?:string;
}

const Input:React.FC<Props> = ({placeholder,type}) => {
    const [isShow,setIsShow] = useState(false)
    const onClick = () =>{
        setIsShow(!isShow)
    }
    return (
        <Container>
            <InputContainer placeholder={placeholder} type={isShow || !type ? 'text' : "password"}/>
            {type === "password" && <ShowPassword onClick={onClick} ><img src={eye}/></ShowPassword>}
        </Container>
    )

}

export default Input