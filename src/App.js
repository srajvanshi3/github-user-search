import './App.css';
import SearchBox from  "./Component/Seearchbox"
import SearchResult from "./Component/SearchResult"
import{BrowserRouter , Switch , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
<SearchBox/>
<Switch>
<Route exact path="/SearchResult" component={SearchResult}/>

</Switch>
    </div>
  );
}

export default App;
