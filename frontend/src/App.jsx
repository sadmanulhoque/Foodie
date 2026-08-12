import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from "./layouts/Layout";
export default function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </Layout>

    );
}
