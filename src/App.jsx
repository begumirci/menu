import { Outlet } from 'react-router-dom';
import Buttons from './buttons';
import LeftSide from './LeftSide';
import Menu from './Menu';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
