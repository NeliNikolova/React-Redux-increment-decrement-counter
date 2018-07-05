import React, { Component} from 'react';
import {PropTypes} from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


const mapDispatchToProps = dispatch => {

    return {
        incrementCounter:payload => dispatch(actions.increment(payload)),
        removeCounter:payload => dispatch(actions.decrement(payload)),
        clearCounter:payload => dispatch(actions.clear(payload))
    };
};


class Item extends Component {
      constructor(props){
          super(props)
      }
      render() {
          console.log(this.props.props.index)
          return (

              <div>
                  <div className="col-md-8">
                      <h1>{this.props.props.value}</h1>
                      <button onClick={()=>{this.props.incrementCounter(this.props.props)}}>INCREMENT</button>
                      <button onClick={()=>{this.props.removeCounter(this.props.props)}}>DECREMENT</button>
                      <button onClick={()=>{this.props.clearCounter(this.props.props)}}>CLEAR</button>
                  </div>
              </div>
          );
      }
}

Item.propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    removeCounter: PropTypes.func.isRequired,
    clearCounter: PropTypes.func.isRequired
};

function mapStateToProps(state) {

    return {state:state}

}

export default connect(mapStateToProps,mapDispatchToProps)(Item);