import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Sort from './routes/Sort';
import Home from './routes/Home';
import Api from './routes/Api';
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
                    <NavLink to="/api">
                        APIs
                    </NavLink>
                </nav>
            </header>

            <main className="app__body">
                <Routes>
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    
                    <Route
                        path="/sort"
                        element={<Sort  />}
                    />

                    <Route
                        path="/API"
                        element={<Api />}
                    />
                   
                </Routes>

            </main>

        </div>
    );
}

export default App;
