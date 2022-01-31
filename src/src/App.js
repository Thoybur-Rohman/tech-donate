
import './App.css';
import {
    HomePage
} from "./cointainers/HomePage";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import {LoginAndRegister} from "./cointainers/LoginAndRegister";
//App componets are being called here
function App() {
  return (
    <div className={"App"}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/login" element={<LoginAndRegister/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
