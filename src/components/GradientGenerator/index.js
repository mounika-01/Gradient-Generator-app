import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading,
  GradientPara,
  DirectionsContainer,
  GradientColorsContainer,
  GradientColor,
  InputColor,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
    direction: gradientDirectionsList[0].value,
  }

  onChangeColor1 = event => {
    this.setState({activeColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({activeColor2: event.target.value})
  }

  activeDirection = value => {
    this.setState({direction: value})
  }

  onChangeGradient = () => {
    const {direction, activeColor1, activeColor2} = this.state
    this.setState({
      gradientValue: `to ${direction}, ${activeColor1}, ${activeColor2}`,
    })
  }

  render() {
    const {gradientValue, activeColor1, activeColor2, direction} = this.state

    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <GradientPara>Choose Direction</GradientPara>
        <DirectionsContainer>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              gradientDetails={eachGradient}
              activeDirection={this.activeDirection}
              active={eachGradient.value === direction}
            />
          ))}
        </DirectionsContainer>
        <GradientPara>Pick the Colors</GradientPara>
        <GradientColorsContainer>
          <GradientColor>
            <GradientPara>{activeColor1}</GradientPara>
            <InputColor
              type="color"
              value={activeColor1}
              onChange={this.onChangeColor1}
            ></InputColor>
          </GradientColor>
          <GradientColor>
            <GradientPara>{activeColor2}</GradientPara>
            <InputColor
              type="color"
              value={activeColor2}
              onChange={this.onChangeColor2}
            ></InputColor>
          </GradientColor>
        </GradientColorsContainer>
        <GenerateBtn onClick={this.onChangeGradient}>Generate</GenerateBtn>
      </MainContainer>
    )
  }
}

export default GradientGenerator