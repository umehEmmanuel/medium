import React from 'react'
import styled from 'styled-components'
import Button from '../reUse/Button'

const Hero = () => {
  return (
 <Container>
   <Main>
   <Big>
   Stay curious.
   </Big>
   <Small>
   Discover stories, thinking, and expertise from writers on any topic.
   </Small>
   <Button text='start reading' w='150px'/>
   </Main>
 </Container>
  )
}

export default Hero

const Small = styled.div`
font-size: 20px;
font-weight: 500;
margin-top: 20px;
margin-bottom: 20px;
`

const Big = styled.div`
font-size: 60px;
font-weight: 500;
`

const Main =styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Container =styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFC017;
`