/**
 * Prop drilling:
 *    - It's a situation where props are passed down through 
 *      the multiple levels of nested components to reach a component 
 *      where the access of that props data is required actually.
 * 
 *    - Eg:
 *        <>
            <Component1 />
            <Component2 />
            <Header data={data}/>
              <NestedComp data={data}>
                <Component3 />
                <Component4 />
                <Component5 data={data}/>
              </NestedComp>
          </>
        - prop drilling problem:
            - unnecessary re-rendring of the component
            - unnecessary passing the props
            - it can lead to manage your code difficult

      What are the solutions for solving prop drilling problems?
       - Context API
       - Redux
       - Custom hooks

      What is context API?
       - It's a global data store that can accessible by any component that needs the data.
       - Eg:
       <>
            <CounterProvider>
              <Component1 />
              <Component2 /> 
                <Header data={data}/>
                  <NestedComp data={data}>
                    <Component3 />
                    <Component4 />
                    <Component5 data={data}/>
                  </NestedComp>
              </CounterProvider>
          </>
        - It allows to create a context where you will keep your data 
          and provide that data to any deep level component.
 *  
 * 
 * 
 */

import Header from "./components/header"
import Counter from "./components/counter/Counter"
import CounterProvider from "./components/counterProvider/CounterProvider"

const App = () => {
  return (
    <>
     <CounterProvider>
        <Header />
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
