import React from 'react'
import styled from 'styled-components'
import MathJax from 'react-mathjax-preview'
import { texify } from '../../utils'
import { UndoIcon } from '../icons'
import { ButtonGroup, ActionButton, ResetButton } from './buttons'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 1rem;
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
            <ResetButton onClick={ resetHandler }><UndoIcon size="32" fill="coral"/></ResetButton>
        </Wrapper>
    )
}