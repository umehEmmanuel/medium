import React from "react";
import styled from "styled-components";

interface iBox {
  name?: string;
  title?: string;
  date?: string;
  time?: string;
  text?: string;
  img?: any;
  img1?: any;
  text2?: string;
}

const Box: React.FC<iBox> = ({
  name,
  title,
  date,
  time,
  text,
  img,
  img1,
  text2,
}) => {
  return (
    <Container>
      <Main>
        <Up>
          <Hold>
            <Small src={img} />
            <Nam>{name} </Nam>
          </Hold>
          <Title>{title}</Title>
          <Txt>{text}</Txt>
          <Holder>
            <Dat>{date}</Dat>
            <Tim>{time}</Tim>
            <Bot>{text2}</Bot>
          </Holder>
        </Up>
        <Pic src={img1} />
      </Main>
    </Container>
  );
};

export default Box;
const Bot = styled.div`
  margin-left: 20px;
  width: 90px;
  height: 20px;
  border: 1px solid silver;
  margin-bottom: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f2f2f2;
  color: black;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`;

const Up = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
`;

const Pic = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

const Tim = styled.div`
  font-weight: 500;
  margin-left: 5px;
`;

const Dat = styled.div`
  font-weight: 500;
`;

const Holder = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Txt = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  cursor: pointer;
`;

const Nam = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

const Small = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Hold = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
