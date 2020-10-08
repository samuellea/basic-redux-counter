import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.rslts.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => { // reach out for properties on the global store state, and define them as props to be available within this ^ component
    return {
        ctr: state.ctr.counter,
        rslts: state.res.results // '.ctr' and '.res' refer to the 'sub-states' that exist on the global state object now that we've seperated our single reducer into seperate sub-reducers, each with their own sub-state.
    };
};

// which ACTIONS do i want to dispatch in this container?
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, id: new Date(), result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // 