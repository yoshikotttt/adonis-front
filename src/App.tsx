import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


import "./App.css";
import theme from "./theme/theme";
import Router from "./router/Router";


function App() {
 

  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
export default App;

// const [todos, setTodos] = useState<Array<TodoType>>([]);
// const onClickFetchData = () => {
//   axios
//     .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//       setTodos(res.data);
//     });
// };
// return (
//   <>
//     <UserProfile user={user} />
//     <Text color={"red"} fontSize={"30px"} />
//     <button onClick={onClickFetchData}>データ取得</button>
//     {todos.map((todo) => (
//       <Todo
//         key={todo.id}
//         title={todo.title}
//         userId={todo.userId}
//         completed={todo.completed}
//       />
//     ))}
//   </>
// );
