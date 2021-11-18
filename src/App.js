import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';
import Troops from './pages/Troops/Troops';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/troops" element={<Troops />} />
      </Routes>
    </>
  );
}

export default App;
