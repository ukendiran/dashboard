import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import service from '../services/apiService'; // Adjust the path as needed
import ChartDataLabels from 'chartjs-plugin-datalabels';
const PieChart2 = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await service.fetchData();
    //         setData(response);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    // };

    const country = [];
    const legend = ['FR'];
    const backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ];

    const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];

    useEffect(() => {
        // fetchData();
        const data = {
            labels: country,
            datasets: [{
                label: 'SA',
                data: [50],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            },
            plugins: {
                datalabels: {
                    color: "#fff",
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
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
                type: 'pie',
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

    return <canvas ref={chartRef} />;
};

export default PieChart2;
