import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber() {
    return (Math.floor(Math.random() * 1000) + 1);
}

function greeting(user) {
    return (
        <div className = 'container'>
            <h1>Welcome {user.name}!</h1>
            <h2 className = 'text-muted'>Your lucky number is: {user.luckyNumber}</h2>
        </div>
    );
}

const user = {
    name: 'Mickey Mouse',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);