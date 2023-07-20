import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Main>
        <Card>
            <Txt>Sign up</Txt>
            <Hold>
                <Nam>Name</Nam>
                <Input placeholder="enter user name"/>
                <Err>input a name</Err>
            </Hold>
            <Hold>
                <Nam>Email</Nam>
                <Input placeholder="enter your email"/>
                <Err>input an email</Err>
            </Hold>
            <Hold>
                <Nam>Password</Nam>
                <Input placeholder="enter your password"/>
                <Err>input a password</Err>
            </Hold>
            <Hold>
                <Nam>Confirm</Nam>
                <Input placeholder="re-enter your password"/>
                <Err>enter inputed password</Err>
            </Hold>
            <Link to="/sign-in" style={{textDecoration:"none", color:"black"}}>
            <Holder>Sign up</Holder>
            </Link>
           
            <Txt1>
                <Txt2>Already have an account?</Txt2>

                <Txt3 to="/sign-in">Sign in</Txt3>
            </Txt1>
        </Card>
      </Main>
    </Container>
  );
};

export default Register;

const Txt3 =styled(Link)`
font-size: 20px;
font-weight: 700;
margin-left: 3px;
cursor: pointer;
text-decoration: none;
color: black;

`

const Txt2 =styled.div`
margin-top: 2px;
font-size: 15px;
`

const Txt1 =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0px;
`

const Holder = styled.button`
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
outline: none;
border: 1px solid black;
color: white;
background-color: black;
border-radius: 5px;
margin: 10px 0px;
margin-left: 35%;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Err =styled.div`
font-size: 10px;
display: flex;
justify-content: flex-end;
color: red;
margin-right: 20px;
`

const Input =styled.input`
width: 250px;
height: 20px;
border-radius: 10px;
outline: none;
border: 1px solid silver;
padding: 10px;
`

const Nam =styled.div``

const Hold =styled.div`
margin-left: 10px;
margin-bottom: 10px;
`

const Txt =styled.div`
text-align: center;
font-size: 30px;
font-weight: 700;
margin: 10px 0px;
`

const Card = styled.div`
  width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid black;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
