import React, { useEffect,useState } from 'react';
import './styles1.css';

const API_URL = "https://942c-203-205-32-65.ngrok-free.app"

const ManagerRequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/api/manager/requests", {
            headers: {
                'Authorization':"Bearer 2XbMGxdRyrdIXkkrCGccUwXnH4n_4h9phWZGR5BUZCW2XnKA4",
                'ngrok-skip-browser-warning': 'any'
            }
        })
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            setRequests(data);
        });
    })

    // Sample list of requests (you can fetch this data from an API or state)

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
