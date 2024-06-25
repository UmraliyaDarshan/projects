import {
  BrowserRouter,
  Routes,
  Route,
//   createBrowserRouter,
//   RouterProvider,
//   createMemoryRouter,
  // createHashRouter,RouterProvider,
} from "react-router-dom";
import React from 'react'
import "./App.css";
import Weatherapp from "./components/weatherapp/Weatherapp";
import "./components/Weatherapp.css";
import { HashRouter, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Texttospeech from './components/Texttospeech';
import Crudapp from "./components/crudoperation/Crudapp";
import ReadData from "./components/crudoperation/ReadData";
import Update from "./components/crudoperation/Update";
import Createoperation from "./components/crudoperation/Createoperation";
import Readoperation from "./components/crudoperation/Readoperation";
import Updateoperation from "./components/crudoperation/Updateoperation";
import A from "./components/A";
import A2 from "./components/A2";
import B from "./components/B";
import C from "./components/C";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Crudapp />,
//   },
//   {
//     path: "/read",
//     element: <ReadData />,
//   },
//   {
//     path: "/update",
//     element: <Update />,
//   },
//   {
//     path: "/weatherapp",
//     element: <Weatherapp />,
//   },
// ]);
// const router1 = createMemoryRouter([
//   {
//     path: "/throw",
//     element: "",
//   },
// ]);
// const lazyhome=React.lazy(()=>import('./components/crudoperation/Createoperation'))
function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      {/* <HashRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          <Route path="/home/" element={<Home />}>
          </li>
        </ul>
      </HashRouter> */}
      {/* <Route path='/' element={<Crudapp/>}/>
          <Route path='/read' element={<ReadData/>}/>
          <Route path='/update' element={<Update/>}/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/a" element={<A/>}>
            <Route path=":id" element={<A2/>}/>
            <Route path="b" element={<B/>}/>
            <Route path="c" element={<C/>}/>
          </Route> */}
          <Route path="/" element={<Createoperation />} />
          <Route path='/weatherapp' element={<Weatherapp/>}/> 
          <Route path="/readoperation" element={<Readoperation />} />
          <Route path="/updateoperation" element={<Updateoperation />} />
          <Route path='/texttospeech' element={<Texttospeech/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
