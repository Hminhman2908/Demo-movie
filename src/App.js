import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import DetailMovie from "./page/Home/DetailMovie/DetailMovie";
import Layout from "./template/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />
        <Route path="/movie/:id" element={<Layout>
          <DetailMovie />
        </Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
