
import { render } from '@testing-library/react';
import './app.css';
import Videos from './components/videos'
import Header from './components/header'

function App() {
  return (
    <div>
        <Header/>
        <Videos/>
    </div>
  ) 
}

export default App;
