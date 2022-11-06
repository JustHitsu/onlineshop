import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Route> 
    </Routes>
  </BrowserRouter>;
}

export default App;
