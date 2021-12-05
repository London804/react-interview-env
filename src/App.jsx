import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Sort from './routes/Sort'
import {  NavLink } from "react-router-dom";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <nav>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/sort">
                        Sort
                    </NavLink>
                </nav>
            </header>

            <main className="app__body">
                <Routes>
                    {/* <Route path="/home" element={<Products />} /> */}
                    <Route
                        path="/sort"
                        element={<Sort  />}
                    />
                   
                </Routes>
            </main>

        </div>
    );
}

export default App;
