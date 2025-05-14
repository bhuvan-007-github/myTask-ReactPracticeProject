import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TagsMenu from '../TagsMenu'
import TaskDetails from '../TaskDetails'

import {
  SectionHeading,
  InputName,
  ErrorMessage,
  TagsMenuContainer,
  HomeBgContainer,
  CreateTaskContainer,
  InputSectionContainer,
  TaskDescriptionInput,
  TaskCategoryInput,
  TaskCategoryOption,
  AddTaskBtn,
  AddTaskBtnContainer,
  DisplayTagsAndTasks,
  FilteredTaskListContainer,
  DisplayTaskList,
} from './styledComponents'

const tagsList = [
  {optionId: 'HEALTH', displayText: 'Health'},
  {optionId: 'EDUCATION', displayText: 'Education'},
  {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
  {optionId: 'SPORTS', displayText: 'Sports'},
  {optionId: 'TRAVEL', displayText: 'Travel'},
  {optionId: 'OTHERS', displayText: 'Others'},
]

class Home extends Component {
  state = {
    tasksList: [],
    taskDescription: '',
    taskCategory: tagsList[0].optionId,
    activeTag: '',
    isTagSelected: false,
  }

  createListItem = event => {
    event.preventDefault()
    const {taskDescription, taskCategory} = this.state

    if (taskDescription !== '' && taskCategory !== '') {
      const newTask = {
        taskId: uuidv4(),
        taskDescription,
        taskCategory,
      }

      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        taskDescription: '',
        taskCategory: tagsList[0].optionId,
      }))
    }
  }

  getTaskDescripton = event => {
    this.setState({taskDescription: event.target.value})
  }

  getTagDetails = event => {
    this.setState({taskCategory: event.target.value})
  }

  getSelectedTag = tagId => {
    this.setState(prevState => {
      const isSameTagClicked = prevState.activeTag === tagId
      return {
        activeTag: isSameTagClicked ? '' : tagId,
        isTagSelected: !isSameTagClicked,
      }
    })
  }

  getFilteredTasks = () => {
    const {tasksList, isTagSelected, activeTag} = this.state
    if (isTagSelected) {
      return tasksList.filter(task => task.taskCategory === activeTag)
    }
    return tasksList
  }

  renderCreateTask = () => {
    const {taskCategory, taskDescription} = this.state
    return (
      <form onSubmit={this.createListItem}>
        <SectionHeading mainHeading>Create a task!</SectionHeading>
        <InputSectionContainer>
          <InputName htmlFor="taskName">Task</InputName>
          <TaskDescriptionInput
            type="text"
            placeholder="Enter the task here"
            id="taskName"
            value={taskDescription}
            onChange={this.getTaskDescripton}
          />
        </InputSectionContainer>
        <InputSectionContainer>
          <InputName htmlFor="selectTag">Tags</InputName>
          <TaskCategoryInput
            id="selectTag"
            value={taskCategory}
            onChange={this.getTagDetails}
          >
            {tagsList.map(eachTag => (
              <TaskCategoryOption
                key={eachTag.optionId}
                value={eachTag.optionId}
              >
                {eachTag.displayText}
              </TaskCategoryOption>
            ))}
          </TaskCategoryInput>
        </InputSectionContainer>
        <AddTaskBtnContainer>
          <AddTaskBtn type="submit">Add Task</AddTaskBtn>
        </AddTaskBtnContainer>
      </form>
    )
  }

  renderEmptyList = () => <ErrorMessage>No Tasks Added Yet</ErrorMessage>

  renderTaskList = () => {
    const filteredTasks = this.getFilteredTasks()

    return (
      <>
        {filteredTasks.length === 0 ? (
          this.renderEmptyList()
        ) : (
          <FilteredTaskListContainer>
            {filteredTasks.map(eachTask => (
              <TaskDetails eachTask={eachTask} key={eachTask.taskId} />
            ))}
          </FilteredTaskListContainer>
        )}
      </>
    )
  }

  render() {
    const {activeTag} = this.state
    return (
      <HomeBgContainer>
        <CreateTaskContainer>{this.renderCreateTask()}</CreateTaskContainer>
        <DisplayTagsAndTasks>
          <SectionHeading>Tags</SectionHeading>
          <TagsMenuContainer>
            {tagsList.map(eachTag => (
              <TagsMenu
                eachTag={eachTag}
                key={eachTag.optionId}
                getSelectedTag={this.getSelectedTag}
                isActive={activeTag === eachTag.optionId}
              />
            ))}
          </TagsMenuContainer>
          <SectionHeading>Tasks</SectionHeading>
          <DisplayTaskList>{this.renderTaskList()}</DisplayTaskList>
        </DisplayTagsAndTasks>
      </HomeBgContainer>
    )
  }
}

export default Home
