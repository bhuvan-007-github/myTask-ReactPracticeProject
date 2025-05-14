import styled from 'styled-components'

export const SectionHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 400;
  color: ${props => (props.mainHeading ? '#f3aa4e' : '#ffffff')};
  text-align: ${props => props.mainHeading && 'center'};
`

export const InputName = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #f1f5f9;
`
export const ErrorMessage = styled.p`
  color: #f1f5f9;
  font-size: 28px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
`
export const TagsMenuContainer = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
`

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #131213;
  height: 100vh;
  padding: 16px 32px;
  width: 30%;
`
export const InputSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 16px 0;
  width: 100%;
`

export const TaskDescriptionInput = styled.input`
  width: 300px;
  height: 30px;
  margin: 8px 0;
  padding: 16px;
  border: none;
  outline: none;
  box-shadow: 0 0 1px 1px #1a171d;
  color: 323f4b;
`
export const TaskCategoryInput = styled.select`
  width: 300px;
  height: 36px;
  margin: 8px 0;
  padding-left: 16px;
`
export const TaskCategoryOption = styled.option`
  font-size: 12px;
  color: #323f4b;
  padding-left: 32px;
`
export const AddTaskBtn = styled.button`
  color: #ffffff;
  background-color: #f3aa4e;
  border-radius: 8px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 16px;
`

export const AddTaskBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DisplayTagsAndTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 70%;
`

export const FilteredTaskListContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  height: 300px;
`

export const DisplayTaskList = styled.div`
  width: 100%;
`
