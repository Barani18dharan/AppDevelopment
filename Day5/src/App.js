import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Login from './components/Login'
import SignUp from './components/signup'
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="main" element={<MainLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="file-manager" element={<FileManager />} />
            <Route path="saved" element={<Saved />} />
            <Route path="settings" element={<Setting />} />
          </Route>
          <Route path="*" element={<> not found</>} />
        </Routes>
    </Router>
  );
}

export default App;
