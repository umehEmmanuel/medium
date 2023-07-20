import React from 'react'
import styled from 'styled-components'

interface iTopics{
    text?: string
}

const Topics:React.FC<iTopics> = ({text}) => {
  return (
    <Container>{text}</Container>
  )
}

export default Topics

const Container =styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
    cursor: pointer;
    color: #6B6B6B;
`