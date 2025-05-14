import styled from 'styled-components'

export const TagItemContainer = styled.li`
  margin-right: 16px;
`

export const TagName = styled.button`
  border: solid 1px #f3aa4e;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#131213' : '#ffffff')};
  background-color: ${props => (props.isActive ? '#f3aa4e' : ' #131213')};
`
