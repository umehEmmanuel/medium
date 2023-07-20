import React from "react";
import styled from "styled-components";
import Box from "../Components/reUse/Box";
import Catgory from "../Components/reUse/Catgory";
import Topics from "../Components/reUse/Topics";
import man from "../Assets/man.jpeg";
import people from "../Assets/people.png";

const Card = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS from codeLab "
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
          
          <Box
            img1={man}
            title="Code like a pro"
            text="Learn Javascript, HTML, Typescript and CSS"
          name="Umeh Emmanuel" date="4th july." time="4 minute" img={people} text2="Coding"/>
         
        </Left>
        <Right>
          <Side>
            <Txt>Discover more of what matters to you</Txt>
            <Up>
              <Catgory text="Programming" w="120px" />
              <Catgory text="Data science" w="120px" />
              <Catgory text="Technology" w="120px" />
              <Catgory text="Self improvement" w="150px" />
              <Catgory text="Writing" w="90px" />
              <Catgory text="Relationships" w="120px" />
              <Catgory text="Machine learning" w="150px" />
              <Catgory text="Productivity" w="120px" />
              <Catgory text="Politics" w="90px" />
            </Up>

            <Txt2>See more topics</Txt2>
            <Line />
            <Cat>
              <Topics text="Help" />
              <Topics text="Status" />
              <Topics text="Writer" />
              <Topics text="Blog" />
              <Topics text="Careers" />
              <Topics text="Privacy" />
              <Topics text="Terms" />
              <Topics text="About" />
              <Topics text="Texts to speech" />
              <Topics text="Teams" />
            </Cat>
          </Side>
        </Right>
      </Main>
    </Container>
  );
};

export default Card;

const Cat = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Line = styled.div`
  height: 1px;
  width: 90%;
  margin-left: 20px;
  background-color: silver;
  margin-bottom: 20px;
`;

const Txt2 = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0px;
  color: green;
  margin-left: 20px;
`;

const Up = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Txt = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
  margin-top: 25px;
  margin-left: 20px;
`;

const Side = styled.div``;

const Right = styled.div`
  width: 40%;
  margin-bottom: 30px;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
