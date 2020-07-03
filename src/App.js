import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Post from './Components/Post';
import Boast from './Pages/Boasts';
import Roast from './Pages/Roasts';
import Highest from './Pages/Highest';

class App extends React.Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Homepage} exact/>
             <Route path="/post" component={Post}/>
             <Route path="/boasts" component={Boast}/>
             <Route path="/roasts" component={Roast}/>
             <Route path="/highest" component={Highest}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;