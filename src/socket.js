import { io } from "socket.io-client";

const URL = "http://localhost:4444";

export const socket = io(URL);
