import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../../actions/dataQueActions';

class TH extends Component {

    onClick = () => {
        this.props.addData('hello');
    }

    render() {
        return (
            <th onClick={this.onClick} >
                { this.props.title }
            </th>
        )
    }
}

const mapStateToProps = state => ({
    dataQue: state.dataQue
})

export default connect(
    mapStateToProps,
    { addData }
)(TH);