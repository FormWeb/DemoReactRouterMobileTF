import logo from './logo.svg';
import './App.css';
import NavBar from './container/nav-bar/nav-bar';
import { Route, Routes } from 'react-router-dom';
import First from './pages/first/first';
import Second from './pages/second/second';
import Third from './pages/third/third';
import ThirdChild from './pages/third/third-child';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="first/:id" element={<First/>}></Route>
        <Route path="second" element={<Second/>}></Route>
        <Route path="third" element={<Third/>}>
          <Route path="child" element={<ThirdChild/>}></Route>
        </Route>
      </Routes>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
