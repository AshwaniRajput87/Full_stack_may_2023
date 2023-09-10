What is Class based component?
    -> which uses ES6 class
    -> they have their own lifecyle methods

        - constructor()
        - componentDidMount()
        - componentDidUpdate()
        - render()
        - componentWillUnmount()

Class based vs functional Component?
   - uses ES6 arrow function or normal function to return JSX elements.
   - It doesn't have the explicit lifecyle methods.

   - to set the intial values in FC ->  you can hooks -> useState() hook;
          const [count, setCount] = useState(0);

          count = 0;

          return (
             <>
               <p> Count: {count}</p>
             </>
          )

    - To maintain the lifecycle methods in FC:
        1. componentDidMount() -> useEffect(()=>{

        }, []);

        2. componentDidUpdate() -> useEffect(()=>{

        }, [count, setCount]);

        3. componentWillUnmount() -> useEffect(()=>{

            return {
                console.log('Component gets unmounted');
            }
        }, []);


      To avoid re-rendering in case of class based component - use PureComponent
    - <ParentComp val={1}>
        - <ListItems data={data}/>
        - <Counter /> --> PureComponent -> used to avoid the re-rendering (because it compares the prev props to next updated props and prev state to next updated state)
      </ParentComp>

    - To avoid re-rendering in case of functional component - use React.memo() -> memo is HOC
     