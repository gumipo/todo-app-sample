import React from "react";
import styled from "styled-components";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const StyledApp = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 0;
`;

function App() {
  const [tasks, setTasks] = React.useState([]);

  return (
    <StyledApp>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </StyledApp>
  );
}

export default App;
