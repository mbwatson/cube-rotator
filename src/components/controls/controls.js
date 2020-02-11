import React from 'react'
import styled from 'styled-components'
import MathJax from 'react-mathjax-preview'
import { texify } from '../../utils'
import { Button } from '../button'

const Wrapper = styled.div`
    // border: 1px solid #f99; * { border: 1px solid #f99; }
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 50%;
    }
    display: flex;
    justify-content: center;
    align-items: stretch;
`

export const ActionButton = styled(Button)`
    background-color: coral;
    padding: 0;
    & .MathJax {
        pointer-events: none;
    }
`

export const ButtonGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    & ${ Button } {
        height: 100%;
        width: 100%;
    }
`

export const ControlPanel = ({ children, xRotationHandler, yRotationHandler, zRotationHandler, resetHandler }) => {
    return (
        <Wrapper>
            <ButtonGroup>
                <ActionButton onClick={ xRotationHandler(1) }><MathJax math={ texify('x') } /></ActionButton>
                <ActionButton onClick={ xRotationHandler(-1) }><MathJax math={ texify('x^-') } /></ActionButton>
            </ButtonGroup>
            <ButtonGroup>
                <ActionButton onClick={ yRotationHandler(1) }><MathJax math={ texify('y') } /></ActionButton>
                <ActionButton onClick={ yRotationHandler(-1) }><MathJax math={ texify('y^-') } /></ActionButton>
            </ButtonGroup>
            <ButtonGroup>
                <ActionButton onClick={ zRotationHandler(1) }><MathJax math={ texify('z') } /></ActionButton>
                <ActionButton onClick={ zRotationHandler(-1) }><MathJax math={ texify('z^-') } /></ActionButton>
            </ButtonGroup>
        </Wrapper>
    )
}