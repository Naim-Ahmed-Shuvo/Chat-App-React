import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
const App = () => {
    return (
       <Router>
           <Route exact path="/" component={Join}/>
       </Router>
    );
};

export default App;