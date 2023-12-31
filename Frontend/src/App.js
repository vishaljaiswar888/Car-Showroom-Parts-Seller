import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Footer from './layout/Footer';
import ViewUser from './users/ViewUser';
import Login from './pages/Login';
import ViewProduct from './products/ViewProduct';
import Part1Table from './products/Part1Table';
import UserTable from './pages/UserTable';
import ViewPart1 from './products/ViewPart1';
import AdminView from './pages/AdminView';
import AddPart1 from './products/AddPart1';
import EditPart1 from './products/EditPart1';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adminview" element={<AdminView/>} />
          <Route exact path="/editpart1/:id" element={<EditPart1/>} />
          <Route exact path="/addpart1" element={<AddPart1/>} />
          <Route exact path="/usertable" element={<UserTable/>} />
          <Route exact path="/part1table" element={<Part1Table/>} />
          <Route exact path="/viewproduct" element={<ViewProduct/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/addUser" element={<AddUser/>} />
          <Route exact path="/edituser/:id" element={<EditUser/>} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/viewpart1/:id" element={<ViewPart1 />} />

        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
