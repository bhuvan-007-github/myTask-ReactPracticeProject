import {TaskDetailsListItem, TaskCategoryDetails} from './styledComponents'

const TaskDetails = props => {
  const {eachTask} = props
  const {taskCategory, taskDescription} = eachTask
  const taskCategoryToCapitalize = taskCategory.toCa
  console.log('in task details')
  return (
    <TaskDetailsListItem>
      <p>{taskDescription}</p>
      <TaskCategoryDetails>{taskCategory}</TaskCategoryDetails>
    </TaskDetailsListItem>
  )
}

export default TaskDetails
