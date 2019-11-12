import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

am4core.useTheme(am4themes_animated);

class index extends Component {
    state = {
        title: 'My Title',
        chart: null,
        data: {
            x: {
                categoryX: 'Trial Type',
                values: [ 'Error Detection', 'False Alarm' ]
            },
            y: {
                valueY: 'Values',
                values: [ 72, 11 ]
            }
        }
    }

    componentDidMount(){
        // Init chart
        let chart = am4core.create('chartdiv', am4charts.XYChart);

        chart.data = [
            {
                [this.state.data.x.categoryX]: this.state.data.x.values[0],
                [this.state.data.y.valueY]: this.state.data.y.values[0]
            },
            {
                [this.state.data.x.categoryX]: this.state.data.x.values[1],
                [this.state.data.y.valueY]: this.state.data.y.values[1]
            }
        ]

        // Create a category on the XAxis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = this.state.data.x.categoryX;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        // Create a value axis on YAxis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create a series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = this.state.data.y.valueY;
        series.dataFields.categoryX = this.state.data.x.categoryX;
        series.name = this.state.title;
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = 0.8;
        series.columns.template.strokeWidth = 2;
        series.columns.template.strokeOpacity = 1;

        this.setState({ chart })
    }

    componentWillUnmount(){
        if(this.chart){
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center text-muted'>
                    { this.state.title }
                </h1>
                <div id='chartdiv' style={{ height: '500px' }}></div>
            </div>
        )
    }
}

export default index;