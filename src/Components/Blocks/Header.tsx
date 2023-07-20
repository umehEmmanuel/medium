import React, { useState } from "react";
import styled from "styled-components";
import Button from "../reUse/Button";
import { Link } from "react-router-dom";

const Header = () => {
const [scroll , setScroll] =useState<boolean>()

const Scroll =()=>{
if (window.scrollY>=80) {
    setScroll(true)
} else {
    setScroll(false)
}
}
  window.addEventListener("scroll" ,Scroll)
  return (
<div>
    {
        scroll?(    <Container bg="white">
            <Main>
              <Hold>
                <Pic></Pic>
                <Logo>Medium</Logo>
              </Hold>
              <Divs>
                <Navs>
                  <Nav to=''>Our story</Nav>
                </Navs>
                <Navs>
                  <Nav to=''>Membership</Nav>
                </Navs>
                <Navs>
                  <Nav to=''>Write</Nav>
                </Navs>
                <Navs>
                  <Nav to='/sign-in'>Sign in</Nav>
                </Navs>
                <Link to="/register" style={{textDecoration:"none", color:"white"}}>
                <Button text="Get started" w="100px"/>
                </Link>
              </Divs>
            </Main>
          </Container>):    <Container bg="#FFC017">
      <Main>
        <Hold>
          <Pic></Pic>
          <Logo>Medium</Logo>
        </Hold>
        <Divs>
          <Navs>
            <Nav to="">Our story</Nav>
          </Navs>
          <Navs>
            <Nav to="">Membership</Nav>
          </Navs>
          <Navs>
            <Nav to="">Write</Nav>
          </Navs>
          <Navs>
            <Nav to="/sign-in">Sign in</Nav>
          </Navs>
          <Link to="/register" style={{textDecoration:"none", color:"white"}}>
          <Button text="Get started" w="100px"/>
          </Link>
        </Divs>
      </Main>
    </Container>
    }
</div>
  );
};

export default Header;

const Nav = styled(Link)`
  margin-left: 20px;
  font-weight: 300;
  font-size: 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Navs = styled.div``;

const Divs = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  color: black;
  font-weight: 600;
`;

const Pic = styled.div``;

const Hold = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{bg?:string}>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg})=>bg};
  border-bottom: 1px solid black;
  position: fixed;
`;
