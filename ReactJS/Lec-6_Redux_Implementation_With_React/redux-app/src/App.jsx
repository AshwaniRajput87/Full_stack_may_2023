import { Provider }  from 'react-redux';
import { store } from './redux/store';
import './App.css'
// import Counter from './normalComponent/Counter'
import CounterWithRedux from './reduxComponent/CounterWithRedux';
// import CounterWithInput from './normalComponent/CounterWithInput';
import CounterWithInputRedux from './reduxComponent/CounterWithInputRedux';


const App = () => {
  return(
    <>
      {/* <Counter /> */}
      {/* <CounterWithInput /> */}
      <Provider store = {store}>
        <CounterWithRedux />
        <CounterWithInputRedux />
      </Provider>
    </>
  )
}

export default App
