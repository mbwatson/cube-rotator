import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 1rem;
    min-height: 4rem;
    font-family: serif;
    font-size: 120%;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Word = ({ children }) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}