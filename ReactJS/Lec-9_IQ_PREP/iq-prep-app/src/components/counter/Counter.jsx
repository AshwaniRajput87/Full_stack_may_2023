import { PureComponent } from 'react';

class Counter extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // x: 10
        }
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    componentDidMount(){
       console.log('Component gets mounted');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component gets updated, Count', prevState.count);
    }

    componentWillUnmount(){
        console.log('Component gets unmounted');
    }

    handleIncrement() {
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));

        // console.log('handle click');
    }

    render(){
        return (
            <>
             <p>Count: {this.state.count}</p>
             <button onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }

}

export default Counter;