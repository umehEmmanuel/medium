import React from 'react'
import styled from 'styled-components'

interface iButton{
    text?:string
    w?:string
}

const Button:React.FC<iButton> = ({text,w}) => {
  return (
    <Botton w={w}>{text}</Botton>
  )
}

export default Button

const Botton =styled.button<{bg?:string, w?:string}>`
margin-left: 20px;
width: ${({w})=>w};
height: 40px;
border: 1px solid silver;
outline: none;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color:black;
color: white;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`