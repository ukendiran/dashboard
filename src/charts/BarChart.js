import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import service from '../services/apiService'; // Adjust the path as needed
import ChartDataLabels from 'chartjs-plugin-datalabels';
const BarChart = ({bardataset}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await service.fetchData();
            setData(response);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const country = ['CH', 'FR', 'SA'];
 

    useEffect(() => {
        // fetchData();
        const data = {
            labels: country,
            datasets: bardataset
        };

        const options = {
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    align: 'center',
                    anchor: 'center',
                    formatter: function (value, index, values) {
                        if (value > 0) {
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);
                            value = value.join(',');
                            return value;
                        } else {
                            value = "";
                            return value;
                        }
                    }
                }
            },
        };

        if (chartRef && chartRef.current) {
            // Destroy the previous chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options,
                plugins: [ChartDataLabels],

            });
        }

        // Clean up function
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (<>
        <canvas ref={chartRef} />
    </>);
};

export default BarChart;
