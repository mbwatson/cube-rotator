import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring } from 'react-spring'
import { ControlPanel } from './components/controls'
import { Cube } from './components/cube'
import { Word } from './components/word'
import { Header, Main, Footer } from './components/layout'
import { AxisKey } from './components/axis-key'
const SIDE_LENGTH = '300px'

const Wrapper = styled.div`
    // border: 1px solid #f99; & * { border: 1px solid #f99; }
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(30deg, steelblue, darkslategray);
`

const App = () => {
    const [rotationX, setRotationX] = useState(0)
    const [rotationY, setRotationY] = useState(0)
    const [rotationZ, setRotationZ] = useState(0)
    const [word, setWord] = useState('')

    const animation = useSpring({
        transform: `
            translateZ(calc(-${ SIDE_LENGTH } / 2))
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
        <Wrapper>
            
            <Header>
                <AxisKey />
                
                <ControlPanel
                    xRotationHandler={ handleRotateX }
                    yRotationHandler={ handleRotateY }
                    zRotationHandler={ handleRotateZ }
                    resetHandler={ handleResetRotation }
                />
            </Header>
            

            <Main>
                <Cube sideLength={ SIDE_LENGTH } animation={ animation } />
            </Main>
            
            <Footer>
                <Word word={ word } />
            </Footer>

        </Wrapper>
    )
}

export default App
