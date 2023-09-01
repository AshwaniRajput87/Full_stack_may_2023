import { Provider } from 'react-redux';
import User from './components/User';

import {store} from './redux/store';
import './App.css'

const App = () => {
  return (
    <Provider store = {store}>
      <User userId ={1}/>  
    </Provider>
  )
}

export default App
