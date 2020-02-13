import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring } from 'react-spring'
import { ControlPanel } from './components/controls'
import { Cube } from './components/cube'
import { Word } from './components/word'
import { Header, Main, Footer } from './components/layout'
import { InfoIcon, UndoIcon } from './components/icons'
import { Button } from './components/button'
import { Modal } from './components/modal'
import { AxisKey } from './components/axis-key'

const SIDE_LENGTH = '250px'

export const HeaderButton = styled(Button)`
    background-color: transparent;
    border: 0;
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    transition: filter 250ms, background-color 250ms;
    &:hover {
        filter: brightness(0.8);
        background-color: #ffffff22;
    }
`

const Wrapper = styled.div`
    // border: 1px solid #f99; & * { border: 1px solid #f99; }
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(30deg, steelblue, darkslategray);
`

const App = () => {
    const [xRotation, setXRotation] = useState(0)
    const [yRotation, setYRotation] = useState(0)
    const [zRotation, setZRotation] = useState(0)
    const [word, setWord] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)

    const animationConfig = { mass: 1, tension: 200, friction: 20, }

    const xAnimation = useSpring({ transform: `rotateX(${ xRotation }deg)`, config: animationConfig })
    const yAnimation = useSpring({ transform: `rotateY(${ yRotation }deg)`, config: animationConfig })
    const zAnimation = useSpring({ transform: `rotateZ(${ zRotation }deg)`, config: animationConfig })

    const handleXRotate = value => event => {
        setXRotation(xRotation => xRotation - value * 90)
        const newChar = value === 1 ? 'x' : 'x^-'
        setWord(word => word + newChar)
    }

    const handleYRotate = value => event => {
        setYRotation(yRotation => yRotation - value * 90)
        const newChar = value === 1 ? 'y' : 'y^-'
        setWord(word => word + newChar)
    }

    const handleZRotate = value => event => {
        setZRotation(zRotation => zRotation - value * 90)
        const newChar = value === 1 ? 'z' : 'z^-'
        setWord(word => word + newChar)
    }

    const handleResetRotation = () => {
        setXRotation(0)
        setYRotation(0)
        setZRotation(0)
        setWord('')
    }

    return (
        <Wrapper>
            <Modal
                title="Help"
                isVisible={ modalVisibility }
                closeHandler={ () => setModalVisibility(false) }
            >
                <p>
                    Use the buttons to rotate the cube.
                    The rotation $x$, $y$, and $z$ perform are rotations about the corresponding axes following the right-hand rule.
                    The inverses, $x^-$, $y^-$, and $z^-$, rotate the cube in the opposite direction.
                </p>
                <p>
                    Note that the orientation of the axes depicted below.
                </p>

                <div style={{ textAlign: 'center' }}>
                    <AxisKey />
                </div>
            </Modal>

            <Header>
                <HeaderButton onClick={ () => setModalVisibility(true) }><InfoIcon size="32" fill="coral" /></HeaderButton>
                <Word word={ word } />
                <HeaderButton onClick={ handleResetRotation }><UndoIcon size="32" fill="coral"/></HeaderButton>
            </Header>

            <Main>
                <Cube
                    sideLength={ SIDE_LENGTH }
                    xAnimation={ xAnimation }
                    yAnimation={ yAnimation }
                    zAnimation={ zAnimation }
                />
            </Main>
            
            <Footer>
                <ControlPanel
                    xRotationHandler={ handleXRotate }
                    yRotationHandler={ handleYRotate }
                    zRotationHandler={ handleZRotate }
                    resetHandler={ handleResetRotation}
                />
            </Footer>

        </Wrapper>
    )
}

export default App
