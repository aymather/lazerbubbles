import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import _ from 'lodash';

let xData = [ 0, -0.8, -0.5, -0.9, 0, .5, 1.2, 1.5, 0.2, 1.4, 1.9, 2.9, 0.9, -.5, -3.9, -4.5, -0.9, 0.3, 1.4, -0.4, -2.9, -2.4, 0, 1.1, 1.5, 1.6, 1.8, 1.4, 1.5 ];

class index extends Component {
    state = {
        chart: null,
        title: 'Line Graph',
        data: {
            y: {
                label: 'Voltage',
                values: xData
            },
            x: {
                label: 'Time',
                values: _.range(0, 600, 600/xData.length)
            }
        }
    }

    createData = () => {
        let { x, y } = this.state.data;
        let data = [];
        for(let i = 0; i < x.values.length; i++){
            data.push({
                [x.label]: x.values[i],
                [y.label]: y.values[i]
            })
        }
        
        return data;
    }

    componentDidMount(){
        let chart = am4core.create('chartdiv', am4charts.XYChart);

        chart.data = this.createData();

        let xAxes = chart.xAxes.push(new am4charts.ValueAxis());

        let yAxes = chart.yAxes.push(new am4charts.ValueAxis());

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = this.state.data.y.label;
        series.dataFields.valueX = this.state.data.x.label;

        series.tooltipText = "{value}";

        this.setState({ chart });
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center text-muted'>
                    { this.state.title }
                </h1>
                <div id='chartdiv' style={{ height: '400px' }}></div>
            </div>
        )
    }
}

export default index;