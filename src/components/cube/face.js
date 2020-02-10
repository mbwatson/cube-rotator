import styled from 'styled-components'

export const Face = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${ props => props.color ? props.color : 'coral' };
    border: 2px solid #333;
    opacity: 0.75;
    transform-origin: 50% 50%;
    transform: translateZ(100px) ${ props => props.transform || 'none' };
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #333;
    font-weight: bold;
    font-size: 32pt;
`

