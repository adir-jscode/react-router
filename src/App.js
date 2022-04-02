import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/friend/:friendId" element={<FriendDetails />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* nested Route */}
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
