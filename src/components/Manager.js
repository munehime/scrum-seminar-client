import React, {useEffect, useState} from "react";
import "./styles1.css";
import "./Manager.css";

const API_URL = "http://localhost:5004";

const sendApproveRequest = async (request) => {
    fetch(API_URL + "/api/manager/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request)
    })
        .then((response) => window.location.reload());
};

const getRequestStatusElement = (status) => {
    switch (status) {
        case 1:
            return (
                <span className="status-accepted">Accepted</span>
            );

        case -1:
            return (
                <span className="status-rejected">Rejected</span>
            );

        default:
            return (
                <span className="status-pending">Pending</span>
            );
    }
};

const ManagerRequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchEmployeeRequests = async () => {
            const response = await fetch(API_URL + "/api/manager/requests");
            const data = await response.json();

            setRequests(data);
        };

        fetchEmployeeRequests();
    }, []);

    // Sample list of requests (you can fetch this data from an API or state)

    const handleConfirm = async (requestId) => {
        await sendApproveRequest({id: requestId, status: 1});
    };

    const handleReject = async (requestId) => {
        await sendApproveRequest({id: requestId, status: -1});
    };

    return (
        <div className="manager-container">
            <h1>Employee Request List</h1>
            <div className="request-list">
                {requests.map((request) => (
                    <div className="request" key={request.id}>
                        <h4>Employee Name: {request.name}</h4>
                        <p>Description: {request.description}</p>
                        <p>Time: {request.request_date}</p>
                        <p>Amount: {Number(request.amount).toLocaleString("en-US")}VND</p>
                        <p>Status: {getRequestStatusElement(request.manager_approve_status)}</p>
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
