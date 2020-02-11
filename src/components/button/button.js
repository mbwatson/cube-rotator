import styled from 'styled-components'

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    font-style: italic;
    font-size: 125%;
    margin: 0;
    font-weight: bold;
    color: #000;
    border: 1px solid #00000033;
    transition: filter 250ms;
    &:hover {
        filter: brightness(0.8);
    }
`