import axios from "axios";
import "./App.css";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";
import { User } from "./types/api/user";
import UserCard from "./components/UserCard";

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name} (${user.username})`,
          email: user.email,
          address: `${user.address.city} ${user.address.suite} ${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{color:"red"}}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>ロード中...</p>
      ) : (
        userProfiles.map((user) => <UserCard key={user.id} user={user} />)
      )}
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
