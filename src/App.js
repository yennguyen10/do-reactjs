import React from 'react';

import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';


import Clock from './components/Clock';
import Demo from './components/Demo';
import Bloglist from './components/Post';

function App() {
  return (
    <div className="App">            
      {/*<Demo1 />
      <Demo2 />
      <Demo3 />    
      <Clock/>
      <Demo/>*/}
      <Bloglist/>
    </div>
  );
}

export default App;
