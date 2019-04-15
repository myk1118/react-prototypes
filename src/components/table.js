import React from 'react';

export default (props) => {
    const tableRows = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });

    return (
        <table className='table'>
            <thead className='thead-inverse'>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                {/* <tr>
                    <td>Mickey Mouse</td>
                    <td>Dancing</td>
                    <td>88</td>
                </tr>
                <tr>
                    <td>Minnie Mouse</td>
                    <td>Singing</td>
                    <td>92</td>
                </tr>
                <tr>
                    <td>Daisy Duck</td>
                    <td>Drawing</td>
                    <td>96</td>
                </tr> */}
            </tbody>
        </table>
    );
}