import React from "react";
import styled from "styled-components";

const StyledTodoForm = styled.div`
  padding: 16px;
  border-bottom: 2px solid #ddd;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 24px;
    margin-right: 16px;
  }
  button {
    white-space: nowrap;
  }
`;

export const TodoForm = ({ tasks, setTasks }) => {
  const inputRef = React.useRef(null);

  const addTask = () => {
    // input要素のvalueを取得してsetTasksを実行
    const value = inputRef.current.value;

    // 入力値が空だった場合は無効化
    if (!value.length) {
      return;
    }

    setTasks([
      {
        title: value,
        checked: false,
      },
      ...tasks,
    ]);

    // 入力したらinputを空にする
    inputRef.current.value = "";
  };

  return (
    <StyledTodoForm>
      <input type="text" ref={inputRef} placeholder="タスクを入力してください" />
      <button onClick={addTask}>タスクを追加</button>
    </StyledTodoForm>
  );
};
