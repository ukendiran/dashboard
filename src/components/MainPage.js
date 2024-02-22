import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import React from 'react'
import { FilterComponent } from './FilterComponent';
import { barchartDataset2, barchartDataset1 } from '../utils/barchartutils';
import { pie1, pie1data, pie2, pie2data, pie3, pie3data } from '../utils/piechart';
 import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddchartIcon from '@mui/icons-material/Addchart';
import VisibilityIcon from '@mui/icons-material/Visibility';
 

export const MainPage = () => {
    return (
        <React.Fragment>
            <div className="row mb-2">
                <div className='col-md-6'></div>
                <div className='col-md-6 d-flex justify-content-end'>
                    <FilterComponent />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mb-3  ">

                    <div className='col-md-12 '>
                        <div className='row'>
                            {cardata.map(card => (
                                <div className='col-md-3 '>
                                    <Cards carddata={card} />
                                </div>
                            ))}


                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Bar Chart</h5>
                                <BarChart bardataset={barchartDataset1} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Bar Chart</h5>
                                <BarChart bardataset={barchartDataset2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Pie Chart</h5>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart label={pie1} datapoints={pie1data} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart label={pie2} datapoints={pie2data} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart label={pie3} datapoints={pie3data} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart label={pie1} datapoints={pie1data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-5'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Card </h5>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <div className='card'>
                                            <div className='card'>
                                                <div className='card-body text-center'>
                                                    <h5>First Name</h5>
                                                    <p>CH</p>
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <div className='card'>
                                            <div className='card'>
                                                <div className='card-body text-center'>
                                                    <h5>Cost Reference ID</h5>
                                                    <p>FR</p>
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <div className='card'>
                                            <div className='card'>
                                                <div className='card-body text-center'>
                                                    <h5>Position Reference ID</h5>
                                                    <p>CH</p>
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <div className='card'>
                                            <div className='card'>
                                                <div className='card-body text-center'>
                                                    <h5>Pay Group Reference ID</h5>
                                                    <p>SA</p>
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
