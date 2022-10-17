import React from 'react'
import './App.css';
import RefsDemo from './components/RefsDemo';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='TWD'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <RefsDemo />
    </div>
  );
}

export default App;
