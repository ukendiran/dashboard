
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import BarChart from '../charts/BarChart';
import BarChart1 from '../charts/BarChart1';
import PieChart from '../charts/PieChart';
import PieChart1 from '../charts/PieChart1';
import PieChart2 from '../charts/PieChart2';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const MainPage = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div className="dashboard">
            <div className="row">
                <div className='col-md-6'></div>
                <div className='col-md-6 d-flex justify-content-end'>
                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Select Country"
                            onChange={handleChange}
                        >
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'Germany'}>Germany</MenuItem>
                            <MenuItem value={'France'}>France</MenuItem>
                            <MenuItem value={'India'}>India</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="container">

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Bar Chart</h5>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card shadow p-3 bg-white rounded'>
                            <div className='card-body'>
                                <h5 className="card-title">Discrepancies - Bar Chart</h5>
                                <BarChart1 />
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
        </div>
    )
}