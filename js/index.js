import { Login } from "./components/Auth/Login.js";
import { Loading } from "./components/Auth/loading.js";
import { Register } from "./components/Auth/Register.js";
import { setScreen } from "./app.js";

const login = new Login();

const loading = new Loading();
const register = new Register();
setScreen(login);
