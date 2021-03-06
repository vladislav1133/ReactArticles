import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux' //factory for decorator
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log('---', 'counter mounting')
    }

    componentDidUpdate() {
        console.log('---', 'counter updating')
    }

    handleIncrement = () => {
        const {increment} = this.props
        increment()
    }

    render() {
        return (
            <div>
                <h2>Counter: {this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        )
    }

}

// function mapStateProps(state) {
//     return {
//         counter: state.count
//     }
// }

//const mapToDispatch =


//const decorator = connect(mapStateProps,mapToDispatch)

export default connect( (state) => ({   //connect second argument wrap AC in dispatch exp: this.props.dispatch(increment()) === increment() now
    counter: state.count
}), {increment} )(Counter)