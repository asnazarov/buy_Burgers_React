import {Route} from "react-router-dom";

import {Header} from './components'
import {Cart, Home} from './pages'

function App() {
  // window.test = () => {
  //   axios.get('http://localhost:3000/db.json').then(({data}) => {
  //     dispatch(setBurgers(data.burgers))
  //   })
  // }

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
// const mapStateToProps = (state) => {
//   return {
//     items: state.burgers.items,
//     filters: state.filters
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setBurgers: (items) => dispatch(setBurgers(items))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
