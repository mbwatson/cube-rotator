import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { useSpring } from 'react-spring'
import { ControlPanel, ButtonGroup, Button } from './components/controls'
import { Cube, Face } from './components/cube'
import { Word } from './components/word'

const LENGTH = '300px'

const Scene = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: ${ LENGTH };
    width: ${ LENGTH };
    border: 1px solid #555;
    perspective: 1000px;
`

const App = () => {
    const [rotationX, setRotationX] = useState(0)
    const [rotationY, setRotationY] = useState(0)
    const [rotationZ, setRotationZ] = useState(0)
    const [word, setWord] = useState('')

    const animation = useSpring({
        transform: `
            translateZ(calc(-${ LENGTH } / 2))
            rotateX(${ rotationX }deg)
            rotateY(${ rotationY }deg)
            rotateZ(${ rotationZ }deg)
        `,
        config: { mass: 1, tension: 200, friction: 20, },
    })
    
    const handleRotateX = value => event => {
        setRotationX(rotationX => rotationX + value * 90)
        const newChar = value === 1 ? 'x' : 'x^-'
        setWord(word => word + newChar)
    }

    const handleRotateY = value => event => {
        setRotationY(rotationY => rotationY + value * 90)
        const newChar = value === 1 ? 'y' : 'y^-'
        setWord(word => word + newChar)
    }

    const handleRotateZ = value => event => {
        setRotationZ(rotationZ => rotationZ + value * 90)
        const newChar = value === 1 ? 'z' : 'z^-'
        setWord(word => word + newChar)
    }

    const handleResetRotation = () => {
        setRotationX(0)
        setRotationY(0)
        setRotationZ(0)
        setWord('')
    }

    return (
        <Fragment>
            <ControlPanel>
                <ButtonGroup>
                    <Button onClick={ handleRotateX(1) }>x</Button>
                    <Button onClick={ handleRotateX(-1) }>x^-</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={ handleRotateY(1) }>y</Button>
                    <Button onClick={ handleRotateY(-1) }>y^-</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={ handleRotateZ(1) }>z</Button>
                    <Button onClick={ handleRotateZ(-1) }>z^-</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={ handleResetRotation }>RESET</Button>
                </ButtonGroup>
            </ControlPanel>
            <Scene>
                <Cube style={ animation }>
                    <Face color="white" style={{ transform: `rotateY(0deg) translateZ(calc(${ LENGTH } / 2))` }}>FRONT</Face>
                    <Face color="peachpuff" style={{ transform: `rotateY(-90deg) translateZ(calc(${ LENGTH } / 2))` }}>RIGHT</Face>
                    <Face color="coral" style={{ transform: `rotateY(90deg) translateZ(calc(${ LENGTH } / 2))` }}>LEFT</Face>
                    <Face color="darkcyan" style={{ transform: `rotateY(180deg) translateZ(calc(${ LENGTH } / 2))` }}>BACK</Face>
                    <Face color="powderblue" style={{ transform: `rotateX(90deg) translateZ(calc(${ LENGTH } / 2))` }}>TOP</Face>
                    <Face color="olive" style={{ transform: `rotateX(-90deg) translateZ(calc(${ LENGTH } / 2))` }}>BOTTOM</Face>
                </Cube>
            </Scene>
            <Word word={ word } />
        </Fragment>
    )
}

export default App
