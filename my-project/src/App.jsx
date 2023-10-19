import "./App.css";
import Component1 from "./components/Component1";
import UserProvider from "./context/UserProvider";

function App() {
  // const user = {
  //   name: "Hatdog",
  //   age: 21,
  // };

  return (
    <UserProvider>
      <Component1 />
    </UserProvider>
  );
}

export default App;
