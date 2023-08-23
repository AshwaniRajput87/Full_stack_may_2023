import FetchData from "./components/hooks/FetchData";
import HooksWithUseEffect from "./components/hooks/HooksWithUseEffect";
import Todo from "./components/todo/Todo";
const App = () => {
  return (
    <>
      <Todo />
      <HooksWithUseEffect />
      <FetchData />
    </>
  )
}

export default App;
