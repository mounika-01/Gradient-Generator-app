// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-image: linear-gradient(${props => props.gradientValue});
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainHeading = styled.h1`
font-family: Roboto;
color: #ffffff;`

export const GradientPara = styled.p`
font-family: Roboto;
color: #ffffff;
font-size: 24px;`

export const DirectionsContainer = styled.ul`
list-style: none;
display: flex;
align-items: center`

export const GradientColorsContainer = styled.div`
display: flex;
align-items: center`

export const GradientColor = styled.div`
display: flex;
flex-direction: column;
margin: 30px;`

export const InputColor = styled.input`
height: 40px;
width: 100px;
`
export const GenerateBtn = styled.button`
height: 30px;
width: 100px;
border: 0;
background-color: #00c9b7;
color: #000000;
cursor: pointer;
border-radius: 5px;
`