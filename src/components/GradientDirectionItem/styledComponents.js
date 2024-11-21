// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
margin-right: 10px;
border-radius: 10px;
color: #000000;
opacity: ${props => (props.active ? 1 : 0.5)};
border: 0;
width: 100px;
height: 30px;
cursor: pointer`

export const DirectionItem = styled.li`
list-style-type: none;
;`