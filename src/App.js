import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="collection-profiles">
      <h1 className="post-title"> My cool instagram clone </h1>

      <div className="profile-card">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
