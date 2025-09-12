import Header from './components/common/Header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App;
