import React, { Component} from 'react';
import {PropTypes} from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Item from "./Item"

const mapDispatchToProps = dispatch => {
    return {
        addNewCounter:() => dispatch(actions.addCounter()),
        removeLastCounter:()=>dispatch(actions.removeCounter())
    };
};


class ItemsWrap extends Component {
    render() {
         const items=this.props.state
        return(
            <div>
                <div className="col-md-8">
                    {items.map(el=>{
                     return   <Item key={el.index} props={el}/>
                    })}
                    <button onClick={()=>{this.props.addNewCounter()}}>ADD NEW</button>
                    <button onClick={()=>{this.props.removeLastCounter()}}>DELETE</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {state:state}

}
export default connect(mapStateToProps,mapDispatchToProps)(ItemsWrap);