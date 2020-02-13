import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../icons'
import { Button } from '../button'

const Wrapper = styled.div`
    background-color: #eee;
    width: 90vw;
    height: 90vh;
    @media screen and (min-width: 768px) {
        width: 60vw;
        height: 60vh;
    }
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0 0 0.5rem #00000099);
    transition: transform 500ms;
`

const CardPortion = styled.div`
    padding: 1rem 1rem 1rem 2rem ;
    color: #333;
`

const Header = styled(CardPortion).attrs({ as: 'header' })`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`

const Title = styled.h2`
    margin: 0;
    flex: 1;
`

const CloseButton = styled(Button)`
    border: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 4rem;
    background-color: #eee;
`

const Body = styled(CardPortion).attrs({ as: 'article' })`
    flex: 1;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
`

export const Modal = ({ title, children, isVisible, closeHandler }) => {
    return (
        <Wrapper style={{ transform: `translate(${ isVisible ? '-50%, -50%' : '-250%, -50%' })` }}>
            <Header>
                <Title>{ title }</Title>
                <CloseButton onClick={ closeHandler }>
                    <CloseIcon fill="black" size="16" />
                </CloseButton>
            </Header>
            <Body>
                { children }
            </Body>
        </Wrapper>
    )
}
