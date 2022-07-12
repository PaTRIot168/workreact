import React from 'react';

import styled from "styled-components";
import Input from "../components/Input";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
    >div{
    flex-basis: 50%;
  }
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 116px;
`
const UpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const Log = styled.h1`
font-size: 50px;
`

const LeftContainer = styled.div`
  background-color: #D9D9D9;
  
`

const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  border: 2px inset black;
`

const Rem = styled.h2`
  font-size: 15px;
  font-family: Sarabun;
  font-weight: normal;
  margin-top: 4px;
  margin-left: 12px;
`

const Checked = styled.div`
  display: inline-flex;
  margin-top: 24px;
`

const Btn = styled.button`
  width: 463px;
  height: 50px;
  background-color: #8E8E8E;
  border-radius: 7px;
  border: 0;
  margin-top: 30px;
  font-size: 20px;
  font-family: Sarabun ;
  font-style: normal;
  color: white;
`

function Login() {
    return (
        <Wrapper>
            <LeftContainer />
            <UpContainer >
                <RightContainer>
                    <Log>Log in</Log>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" type="password" />
                    <Checked>
                        <Checkbox type={"checkbox"}  />
                        <Rem>Remember me</Rem>
                    </Checked>
                    <Btn type="button">log in</Btn>
                </RightContainer>
            </UpContainer>
        </Wrapper>
    );
}

export default Login;
