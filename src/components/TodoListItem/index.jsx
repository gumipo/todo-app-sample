import React from "react";
import styled from "styled-components";

const StyledTodoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoListItem = ({ task, tasks, index, setTasks }) => {
  const [isEdited, setIsEdited] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleCheck = () => {
    // 現在のタスクのchekcedを変更
    const newTasks = tasks;
    newTasks[index].checked = !task.checked;

    // 親コンポーネントのtasksを書き換え
    setTasks([...newTasks]);
  };

  const handleRemove = () => {
    const newTasks = tasks;
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
  };

  const handleEdit = () => {
    const value = inputRef.current.value;
    if (!value.length) {
      return;
    }
    const newTasks = tasks;
    newTasks[index].title = value;
    setTasks([...newTasks]);

    // inputを非表示
    setIsEdited(false);
  };

  return (
    <StyledTodoListItem>
      {isEdited ? (
        <Wrap>
          <input type="text" defaultValue={task.title} ref={inputRef} />
          <button onClick={handleEdit}>変更する</button>
        </Wrap>
      ) : (
        <Wrap onClick={handleCheck}>
          <input type="checkbox" checked={task.checked} readOnly />
          {task.checked ? <del>{task.title}</del> : task.title}
        </Wrap>
      )}
      <Wrap>
        <button onClick={() => setIsEdited(!isEdited)}>編集</button>
        <button onClick={handleRemove}>削除</button>
      </Wrap>
    </StyledTodoListItem>
  );
};
