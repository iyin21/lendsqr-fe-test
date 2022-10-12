import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import User from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/User/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
