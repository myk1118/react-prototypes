import React from 'react';
import Table from './table';

// function App() {
//     return <h1>My first React functional component</h1>
// }

// export default App;

export default () => {
    const students = [
        {
            name: 'Harry Potter',
            course: 'Magic',
            grade: 84
        },
        {
            name: 'Ron Weasley',
            course: 'Flying',
            grade: 78
        },
        {
            name: 'Hermoine Granger',
            course: 'Potion',
            grade: 96
        }
    ];

    return (
        <div className = 'container'>
            <h1>Student Grade Table</h1>
            <Table data = {students}/>
        </div>
    )
}