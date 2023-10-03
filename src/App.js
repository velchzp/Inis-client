import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, fetchAuthMe } from "./redux/slices/auth";
import { useEffect } from "react";

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
        </Routes>
      </Container>
    </>
  );
}

export default App;
