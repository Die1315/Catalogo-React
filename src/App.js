import "./App.css";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";


const initialState = "";

function App() {
  const [search, setSearch] = useState(initialState);
  const [profile, setProfile] = useState(true);
  const [token, loginOk] = useState(localStorage.getItem("token"));

  function onSearch(value) {
    setSearch(value);
  }
  function onProfile(profile) {
    setProfile(profile);
  }

  return (
    <div className="App">
      {token ? (
        <>
          <NavBar valueClick={profile} onProfileClick={onProfile} />
          {profile === true ? (
            <>
              <SearchBar search={search} onSearch={onSearch} />
              <PostList search={search} />
            </>
          ) : (
            <Profile />
          )}
        </>
      ) : (
        <>
          <div className="container-fluid Login " >
            <Login onLoginComplete={loginOk} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
