import styled from 'styled-components'

export const Button = styled.button`
    background-color: coral;
    cursor: pointer;
    padding: 0;
    font-style: italic;
    margin: 0;
    font-weight: bold;
    color: #000;
    border: 1px solid #00000033;
    transition: filter 250ms;
    &:hover {
        filter: brightness(0.8);
    }
`

export const ActionButton = styled(Button)`
    padding: 0 1rem;
`

export const ResetButton = styled(Button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: 0;
    transition: filter 250ms;
    &:hover {
        filter: brightness(0.8);
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
