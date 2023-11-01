import React from 'react';
import './styles1.css';
const ManagerRequestList = () => {
    // Sample list of requests (you can fetch this data from an API or state)
    const requests = [
        {
            id: '',
            name: '',
            reason: '',
            time: '',
            fee: '',
        },
        // Add more requests as needed
    ];

    const handleConfirm = (requestId) => {
        // Handle confirmation logic for the request with the given ID
        console.log(`Confirmed request with ID: ${requestId}`);
    };

    const handleReject = (requestId) => {
        // Handle rejection logic for the request with the given ID
        console.log(`Rejected request with ID: ${requestId}`);
    };

    return (
        <div className="manager-container">
            <h1>Employee Request List</h1>
            <div className="request-list">
                {requests.map((request) => (
                    <div className="request" key={request.id}>
                        <h4>Employee Name: {request.name}</h4>
                        <p>Reason: {request.reason}</p>
                        <p>Time: {request.time}</p>
                        <p>Fee: {request.fee}</p>
                        <button
                            className="confirm-button"
                            onClick={() => handleConfirm(request.id)}
                        >
                            Confirm
                        </button>
                        <button
                            className="reject-button"
                            onClick={() => handleReject(request.id)}
                        >
                            Reject
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerRequestList;
