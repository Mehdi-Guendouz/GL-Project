import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Landing from './components/landingPage/Landing';
import GlobalProfile from "./pages/GlobalProfile";
import ProfileDetails from "./pages/ProfileDetails";
import Search from "./pages/Search";
import Announce from "./pages/Announce";
import Discussion from "./pages/Discussion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Landing />}/>
            <Route  path="/Search" element={<Search />}/>
            <Route  path="/profile" element={<GlobalProfile />}/>
            <Route  path="/details" element={<ProfileDetails />}/>
            <Route path="/" element={<Announce />} />
            <Route path="/discussions" element={<Discussion />} />
            <Route path="/discussions/:id" element={<Discussion />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
