import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
display: block;
    background-color: floralwhite;
    cursor: pointer;
    padding: 1rem;
    font-size: 120%;
    font-style: italic;
    margin: 0;
    font-weight: bold;
    color: #000;
    border: 1px solid #00000033;
    transition: filter 250ms;
    &:hover {
        filter: brightness(0.95);
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    & ${ Button } {
        height: 100%;
        width: 100%;
    }
`

const Wrapper = styled.div`
    // background-color: #33333333;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 1rem;
`

export const ControlPanel = ({ children }) => {
    return (
        <Wrapper>
            { children }      
        </Wrapper>
    )
}