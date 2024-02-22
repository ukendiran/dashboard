import React from 'react';
import { colorScheme } from '../utils/charts';
class CardChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChart: true,
            chartData: [
                { name: 'First Name', value: 1, country: "China" },
                { name: 'Cost Reference ID', value: 1, country: "France" },
                { name: 'Position Reference ID', value: 1, country: "South Africa" },
                { name: 'Pay Group Reference ID', value: 1, country: "India" },
            ]
        };
    }



    render() {
        return (
            <div className='row text-center' style={{ "height": "365px" }}>
                {this.state.chartData && this.state.chartData.map((dataPoint, index) => (
                    <div className="col-md-6 mt-5" key={index}>
                        <div className="card" style={{ backgroundColor: colorScheme['Category10'][index] }}>
                            <div className="card-body text-white">
                                <h5 className="card-title">{dataPoint.name}</h5>
                                <p className="">{dataPoint.country}</p>
                                <p className="">{dataPoint.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardChart;
