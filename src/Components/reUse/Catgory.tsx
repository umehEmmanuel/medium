import React from 'react'
import styled from 'styled-components'

interface iButton{
    text?:string
    w?:string
}

const Catgory:React.FC<iButton> = ({w, text}) => {
  return (
    <Botton w={w}>{text}</Botton>
  )
}

export default Catgory


const Botton =styled.button<{ w?:string}>`
margin-left: 20px;
width: ${({w})=>w};
height: 40px;
border: 1px solid silver;
margin-bottom: 10px;
outline: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color:#F2F2F2;
color: black;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`