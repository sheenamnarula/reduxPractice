import { connect } from 'react-redux';
import CounterPresentation from "../Components/CounterPresentation";
import {increment , decrement} from '../actions/actions'
const mapStateToProps = state => ({
    count: state   // this state we will get as a count in Counter(presentational component)
  })

const mapDispatchToProps = (dispatch) =>({

    increment : () =>{dispatch(increment)},
    decrement : () =>{dispatch(decrement)}
})


export default connect(mapStateToProps,{increment,decrement})(CounterPresentation) 

// const mapDispatchToProps = (dispatch) => ({
//     increment: () => { dispatch({ type: 'INCREMENT' }) },  // dispatching action Increment 
//     decrement: () => { dispatch({ type: 'DECREMENT' }) },
//     reset: () => { dispatch({ type: 'RESET' }) },
//   })
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Counter)
