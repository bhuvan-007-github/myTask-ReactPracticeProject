import {TagName, TagItemContainer} from './styledComponents'

const TagsMenu = props => {
  const {eachTag, getSelectedTag, isActive} = props
  const {displayText, optionId} = eachTag
  const filterTasks = () => getSelectedTag(optionId)
  return (
    <TagItemContainer>
      <TagName type="button" onClick={filterTasks} isActive={isActive}>
        {displayText}
      </TagName>
    </TagItemContainer>
  )
}

export default TagsMenu
