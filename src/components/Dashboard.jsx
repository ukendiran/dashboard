import React from 'react'
import BarChart from "../apexchart/BarChart";
import PieChart from "../apexchart/PieChart";
    import { FilterComponent } from './FilterComponent';
 import CardChart from '../apexchart/CardChart';
 import PaymentIcon from '@mui/icons-material/Payment';
 import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
 import AddchartIcon from '@mui/icons-material/Addchart';
 import VisibilityIcon from '@mui/icons-material/Visibility';
import { Cards } from './Cards';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
function Dashboard() {
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
  const cardata = [
    {
        id: 1,
        count: "China",
        desc: "First Name",
        total: 1
    },
    {
        id: 2,
        count: "France",
        desc: "Cost Reference ID",
        total: 1
    },
    {
        id: 3,
        count: "South Africa",
        desc: "Position Reference ID",
        total: 1
    },
    {
        id: 4,
        count: "India",
        desc: "Pay Group Reference ID",
        total: 1
    }]

  return (
    <>
          <div className="container-fluid">

      <div className="row mb-2" >
        <div className='col-md-6 mt-4 '>
          <h5>Discrepancies</h5>
        </div>
        <div className='col-md-6 d-flex justify-content-end'>
          <FilterComponent onCountryChange={handleCountryChange} />
        </div>
      </div>
</div>
      <div className="container-fluid">
                <div className="row mb-3  ">

                    <div className='col-md-12 '>
                        <div className='row'>
                            {cardata.map(card => (
                                <div className='col-md-3 '>
                                    <Cards carddata={card}  />
                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
      
      <div className="row">
        <div className="col-md-6 mt-2">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Bar Chart</h3>
                <BarChart country={country} categories={["China", "France", "South Africa"]} series={series} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-2">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Bar Chart</h3>
                <BarChart country={country} categories={["First Name", "Cost Reference ID", "Position Reference ID", "Pay Group Reference ID"]} series={series1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mt-4">
          <div className="card shadow p-3 bg-white rounded">
            <div className="card-body">
              <div className="card-title">
                <h3>Discrepancies - Bar Chart</h3>
                <PieChart country={country} categories={["China", "France", "South Africa"]} series={[0,1,1]} />
              </div>
            </div>
          </div>
        </div>
         
      </div>
     </div>

    </>
  )
}

export default Dashboard