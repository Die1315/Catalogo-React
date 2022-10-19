import "./App.css";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Profile from "./components/Profile";

const initialState = "";

function App() {
  const [value, setSearch] = useState(initialState);
  const [profile, setProfile] = useState(true);

  function onSearch(value) {
    setSearch(value);
  }
  function onProfile(profile) {
    setProfile(profile);
  }

  return (
    <div className="App">
      <NavBar valueClick={profile} onProfileClick={onProfile} />
      {profile === true ? (
        <>
          <SearchBar onSearch={onSearch} />
          <PostList value={value} />
        </>
      ) : (
        <Profile />
      )}
    </div>
  );
}

export default App;
