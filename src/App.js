import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, fetchAuthMe } from "./redux/slices/auth";
import { useEffect } from "react";
import { Create_Lobby } from "./pages/Create_Lobby";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_lobby" element={<Create_Lobby />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
