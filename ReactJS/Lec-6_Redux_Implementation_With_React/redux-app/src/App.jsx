import { Provider }  from 'react-redux';
import { store } from './redux/store';
import './App.css'
// import Counter from './normalComponent/Counter'
import CounterWithRedux from './reduxComponent/CounterWithRedux'

const App = () => {
  return(
    <>
      {/* <Counter /> */}
      <Provider store = {store}>
        <CounterWithRedux />
      </Provider>
    </>
  )
}

export default App
