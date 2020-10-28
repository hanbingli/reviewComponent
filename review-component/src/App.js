import logo from './logo.svg';
import bannerPic from './banner.jpg';
import './App.css';

import ReviewPage from './components/ReviewPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bannerPic} className='bannerPic'/>
      </header>
      <ReviewPage />
      
    </div>
  );
}

export default App;
