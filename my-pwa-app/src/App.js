import React from 'react';
import {Route} from 'react-router-dom';
import About from '../../router-tutorial/src/About';
import Home from '../../router-tutorial/src/Home';

const App=()=>{
  return (
    <div><Route path="/" component={Home} />
    <Route path="/about" component={About}/>
    </div>
  );
};

export default App;
