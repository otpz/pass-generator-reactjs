import './App.css';
import PasswordCard from './components/PasswordCard/PasswordCard';

function App() {
  return (
    <div className="container">
      <PasswordCard/>

      <div className='footer'>
        <span className='info'>This project made by <a target='_blank' className='link' href="https://github.com/otpz">Osman TOPUZ</a></span>
      </div>
    </div>
  );
}

export default App;
