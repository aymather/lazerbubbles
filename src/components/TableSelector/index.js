import React, { Component } from 'react';
import data from '../../data';
import TH from './partials/TH';
import TD from './partials/TD';
import { connect } from 'react-redux';
import { initDataFrame } from '../../actions/dataFrameActions';
import { Table } from 'reactstrap';
import DataFrame, { Row } from 'dataframe-js';
import uuid from 'uuid';

import { Link } from 'react-router-dom';

class App extends Component {

    state = {
        data,
        dataFrame: null
    }

    exploreData = () => {
        if(this.state.dataFrame){
            var data = this.state.dataFrame;
            console.log(data);
        }
    }

    componentDidMount(){
        DataFrame.fromCSV('../../sample_data.csv')
            .then(df => { 
                this.setState({
                    dataFrame: df
                })
                this.props.initDataFrame(df);
            })
    }

    thead = () => {
        let fields = Object.keys(this.state.data);
        
        return (
            <thead>
                <tr>
                    {
                        fields.map(field => {
                            return <TH key={uuid()} title={field} />
                        })
                    }
                </tr>
            </thead>
        )
    }

    tr = values => {
        return (
            <tr>
                {
                    values.map(value => {
                        return <TD key={uuid()} value={value} />
                    })
                }
            </tr>
        )
    }

    tbody = () => {
        let fields = Object.keys(this.state.data);
        let rows = this.state.data[fields[0]].length;

        var body = [];
        for(let i = 0; i < rows; i++){
            // Get the values from each field and place them into an array
            body.push(this.tr(fields.map(field => {
                return this.state.data[field][i];
            })))
        }

        return (
            <tbody>
                { body }
            </tbody>
        )
    }

    render(){
        this.exploreData();
        return (
            <div className='container'>
                <h1 className='text-center text-muted'>Main Menu</h1>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <div className='container'>
                    <Table dark>
                        { this.thead() }
                        { this.tbody() }
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dataFrame: state.dataFrame.dataFrame
})

export default connect(
    mapStateToProps,
    { initDataFrame }
)(App);
