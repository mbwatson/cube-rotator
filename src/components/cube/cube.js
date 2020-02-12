import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { Face } from './face'

export const Scene = styled.div`
    position: relative;
    height: ${ props => props.sideLength };
    width: ${ props => props.sideLength };
    border: 1px solid #555;
    perspective: 1000px;
`

const Rotator = styled(animated.div)`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
`

const XRotator = styled(Rotator)``

const YRotator = styled(Rotator)``

const ZRotator = styled(Rotator)``

export const Cube = ({ sideLength, xAnimation, yAnimation, zAnimation }) => {
    return (
        <Scene sideLength={ sideLength }>
            <ZRotator style={ zAnimation }>
                <YRotator style={ yAnimation }>
                    <XRotator style={ xAnimation }>
                        <Face color="white" style={{ transform: `rotateY(0deg) translateZ(calc(${ sideLength } / 2))` }}>FRONT</Face>
                        <Face color="peachpuff" style={{ transform: `rotateY(-90deg) translateZ(calc(${ sideLength } / 2))` }}>RIGHT</Face>
                        <Face color="salmon" style={{ transform: `rotateY(90deg) translateZ(calc(${ sideLength } / 2))` }}>LEFT</Face>
                        <Face color="darkcyan" style={{ transform: `rotateY(180deg) translateZ(calc(${ sideLength } / 2))` }}>BACK</Face>
                        <Face color="powderblue" style={{ transform: `rotateX(90deg) translateZ(calc(${ sideLength } / 2))` }}>TOP</Face>
                        <Face color="olive" style={{ transform: `rotateX(-90deg) translateZ(calc(${ sideLength } / 2))` }}>BOTTOM</Face>
                    </XRotator>
                </YRotator>
            </ZRotator>
        </Scene>
    )
}
