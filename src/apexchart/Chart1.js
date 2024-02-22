import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { colorScheme } from '../utils/charts';

class Chart1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350, // Set the height to 350px
                    type: 'line', // Example chart type
                },

            },
            series: [{
                name: 'My Data',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: 'My Data',
                data: [55, 65, 33, 44, 22, 45, 78, 95, 100]
            }],
            colors: colorScheme['Category10']
        };
    }

    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={this.state.options.chart.height}


                />
            </div>
        );
    }
}

export default Chart1;
