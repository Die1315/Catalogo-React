import './App.css';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <PostList/>
    </div>
  );
}

export default App;
