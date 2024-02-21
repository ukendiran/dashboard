// pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import BarChart from '../charts/BarChart'
import BarChart1 from '../charts/BarChart1'
import PieChart from '../charts/PieChart'
import PieChart1 from '../charts/PieChart1'
import PieChart2 from '../charts/PieChart2'
import Cards from '../charts/Cards'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="container">
                <Header />
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                            <h5 class="card-title">Discrepancies</h5>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 class="card-title">Discrepancies</h5>
                                <BarChart1 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                            <h5 class="card-title">Discrepancies</h5>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        
                                        <PieChart />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart1 />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart2 />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <PieChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                            <h5 class="card-title">Discrepancies</h5>
                                <div className='row'>
                                    <div className='col-md-6 mt-5'>
                                        <div className='card'>
                                            <div className='card'>
                                                <div className='card-body text-center'>
                                                    <h5>First Name</h5>
                                                    <p>CH</p>
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
        </div>
    );
};

export default Dashboard;
