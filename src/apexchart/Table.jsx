import React from 'react';

const TableComponent = ({ series, categories }) => {
    console.log(series)
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Attribute</th>
                    {categories?.map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {series?.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        {item.data.map((value, idx) => (
                            <td key={idx}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
