// Write your code here
// Write your code here
import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, activeDirection, active} = props
  const {displayText, value} = gradientDetails

  const onChangeDirection = () => {
    activeDirection(value)
  }

  return (
    <>
      <DirectionItem>
        <DirectionButton
          type="button"
          onClick={onChangeDirection}
          active={active}
        >
          {displayText}
        </DirectionButton>
      </DirectionItem>
    </>
  )
}

export default GradientDirectionItem