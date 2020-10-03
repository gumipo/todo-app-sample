import React from 'react';
import styled from "styled-components";
import { TodoListItem } from '../TodoListItem';

const StyledTodoError = styled.div`
  padding: 16px;
`;

export const TodoList = ({ tasks, setTasks }) => {
  return tasks.length > 0 ? (
    tasks.map((task, i) => (
      <TodoListItem
        key={i}
        task={task}
        tasks={tasks}
        index={i}
        setTasks={setTasks}
      />
    ))
  ) : (
    <StyledTodoError>
      タスクが登録されていません
      <span role="img" aria-label="sad">
        😭
      </span>
    </StyledTodoError>
  );
};