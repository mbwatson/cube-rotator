import styled from 'styled-components'

export const Toggler = styled.div`
    border: 1px solid #eee;
    background-color: #333;
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: 0;
    right: 0;
    z-index: 99;
    cursor: pointer;
    &::after {
        content: "${ props => props.active ? 'O' : 'X' }";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: #eee;
    }
`
