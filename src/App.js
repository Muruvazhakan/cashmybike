import './App.css';
import ScreenRoute from '../src/components/screenroute/ScreenRoute';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/screens/Footer/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
      <ScreenRoute />
      {/* <div>Homeaa page</div> */}
      </BrowserRouter>
      
    </>
  );
}

export default App;
