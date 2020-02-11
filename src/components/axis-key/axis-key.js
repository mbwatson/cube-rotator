import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    left: 1rem;
    top: 1rem;
`

export const AxisKey = ({ size = '200px', fill = '#333' }) => (
    <Wrapper>
        <svg width={ size } height={ size } fill={ fill } viewBox="0 0 40 20">
            <defs>
                <marker id="dot" markerWidth="8" markerHeight="8" refX="5" refY="5">
                    <circle cx="5" cy="5" r="3" fill="#eee" />
                </marker>
                <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#eee" />
                </marker>
            </defs>
            <g transform="translate(20,0)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#eee" style={{ strokeWidth: '0.2' }} markerStart="url(#dot)" markerEnd="url(#arrow)" />
                <text x="18" y="3" textAnchor="middle" fill="#eee" fontSize="3">x</text>
                <line x1="0" y1="0" x2="-9" y2="12" stroke="#eee" style={{ strokeWidth: '0.2' }} markerEnd="url(#arrow)" />
                <text x="-10" y="9" textAnchor="middle" fill="#eee" fontSize="3">y</text>
                <line x1="0" y1="0" x2="0" y2="18" stroke="#eee" style={{ strokeWidth: '0.2' }} markerEnd="url(#arrow)" />
                <text x="-2" y="20" textAnchor="middle" fill="#eee" fontSize="3">z</text>
            </g>
        </svg>
    </Wrapper>
)