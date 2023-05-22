import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Calculator from "./pages/Calculator";
import Counter from "./pages/Counter";
import Employecard from "./components/Employecard";
import Table from "./pages/Table";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dum from "./pages/dum";
import EmployeList from "./pages/EmployeList";
import EmployeDetail from "./pages/EmployeDetail";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="employelist" element={<EmployeList />}></Route>
        <Route path="employedetail" element={<EmployeDetail />}></Route>
        <Route path="table" element={<Table />}></Route>
        <Route path="calculator" element={<Calculator />}></Route>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="dum" element={<Dum />}></Route>
      </Routes>
    </div>
  );
}

export default App;
