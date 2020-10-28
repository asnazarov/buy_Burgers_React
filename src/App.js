import {Header} from './components'
import {Cart, Home} from './pages'
import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setBurgers(data.burgers)
    })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path="/" component={() => <Home items={burgers} />}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
