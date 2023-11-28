import "./App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, fetchAuthMe } from "./redux/slices/auth";
import { useEffect } from "react";
import { Create_Lobby } from "./pages/Create_Lobby";
import { LobbyList } from "./pages/Lobby_List";
import { socket } from "./socket";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchAuthMe());

    const token = localStorage.getItem("token");
    if (token) {
      socket.emit("authenticate", token);
    }

    socket.on("lobby-created", (lobby) => {
      navigate(`/lobby/${lobby}`);
    });
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby/:id" element={<Create_Lobby />} />
          <Route path="/lobby_list" element={<LobbyList />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
