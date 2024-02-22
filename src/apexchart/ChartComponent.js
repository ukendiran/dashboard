import React from 'react';
import ApexCharts from 'apexcharts';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecondChart: false
        };
    }

    componentDidMount() {
        // Sample data
        const seriesData = [44, 55, 41, 17, 15];
        const categories = ['A', 'B', 'C', 'D', 'E'];

        // Create the first chart
        const chartOptions = {
            chart: {
                type: 'bar',
                events: {
                    // Custom click event on bars
                    dataPointSelection: (event, chartContext, config) => {
                        // Handle click event
                        this.handleDataPointClick(config);
                    }
                }
            },
            series: [{
                name: 'Data',
                data: seriesData
            }],
            xaxis: {
                categories: categories
            }
        };

        this.chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
        this.chart.render();
    }

    handleDataPointClick = (config) => {
        // Logic to handle click event
        // For demonstration, let's toggle the state to show/hide the second chart
        this.setState(prevState => ({
            showSecondChart: !prevState.showSecondChart
        }));
    }

    render() {
        return (
            <div>
                <div id="chart"></div>
                {this.state.showSecondChart &&
                    <div id="chart2">
                        {/* Render your second chart component here */}
                        {/* Example: <SecondChartComponent /> */}
                    </div>
                }
            </div>
        );
    }
}

export default ChartComponent;
