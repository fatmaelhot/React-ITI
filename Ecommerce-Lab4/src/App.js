import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/router/router.js';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
