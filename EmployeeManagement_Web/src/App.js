
import { Employee } from './components/Employee';
import { Department } from './components/Department';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>

            <div className="App container">
                {" "}
                <br />
                <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <img
                    src="%PUBLIC_URL%../../log.png"
                    width="180"
                    class="center"
                    alt=""
                />

                <h3 className="d-flex justify-content-center m-3" style={{
                    fontWeight: "bold",
                }}>

                    John Keells Mangement System

                </h3>


                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                    <ul className="navbar-nav">


                        <li className="nav-item- m-1">

                            <NavLink className="btn btn-info btn btn-outline-dark" to="/department">

                                Department

                            </NavLink>

                        </li>

                        <li className="nav-item- m-1">

                            <NavLink className="btn btn-info btn btn-outline-dark" to="/employee">

                                Employee

                            </NavLink>

                        </li>

                    </ul>

                </nav>




                <Routes>



                    <Route path="/employee" element={<Employee />} />

                    <Route path="/department" element={<Department />} />



                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;


