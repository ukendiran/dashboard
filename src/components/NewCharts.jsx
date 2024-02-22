import React from 'react'
import BarChart from "../apexchart/BarChart";
import PieChart from "../apexchart/PieChart";
import Chart1 from "../apexchart/Chart1";
import Chart2 from "../apexchart/Chart2";
import StackBars from "../apexchart/StackBars";
import ColorTemplate from "../apexchart/ColorTemplate";
import { FilterComponent } from './FilterComponent';

function NewCharts() {
  const [country, setCountry] = React.useState('');
  // Function to update state in the parent component
  const handleCountryChange = (data) => {
    setCountry(data);
  };

  const series = [
    {
      name: "First Name",
      data: [1, 0, 0]
    },
    {
      name: "Cost Reference ID",
      data: [1, 1, 0]
    },
    {
      name: "Cost Reference ID,Position Reference ID",
      data: [0, 0, 1]
    },
    {
      name: "Pay Group Reference ID",
      data: [0, 1, 0]
    }
  ];
  const series1 = [
    {
      name: "China",
      data: [1, 0, 0, 1]
    },
    {
      name: "France",
      data: [0, 0, 0, 0]
    },
    {
      name: "South Africa",
      data: [0, 1, 1, 0]
    },
    {
      name: "India",
      data: [0, 0, 0, 0]
    }
  ];

  return (
    <>
      <div className="row">
        <div className='col-md-6'></div>
        <div className='col-md-6 d-flex justify-content-end'>
          <FilterComponent onCountryChange={handleCountryChange} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-2">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Line Chart</h3>
                <ColorTemplate country={country} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Line Chart</h3>
                <Chart2 country={country} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Line Chart</h3>
                <StackBars country={country} />
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default NewCharts