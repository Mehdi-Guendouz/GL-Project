import React from "react";
import ModifieProfile from "./components/profile/ModifieProfile";
import Landing from './components/landingPage/Landing';
import Profile from "./components/profile/Profile";
import Navbar from './components/search/Navbar'
import Results from './components/search/Results'
import Filters from "./components/search/Filters";
import Details from "./components/search/Details";
import SendMsg from "./components/search/SendMsg";

function App() {
  return (
    <div className="App">
          <div className='font-Raleway font-semibold bg-gray3 w-full overflow-hidden'>
          <div>
          <Navbar />
          </div>
          <div className='flex justify-around p-8'>
            <Filters />
            <Results /> 
            {/* <Details /> */}
            {/* <SendMsg /> */}
          </div>
    </div>
    </div>
  );
}

export default App;
