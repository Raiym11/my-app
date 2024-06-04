import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Friends from './Friends';
import data from './data';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Main data={data.PostPage.posts} />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/friends' element={<Friends />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
