import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const params = useParams();
    return (
        <div>
            <h1>Details showing { params.friendId}</h1> 
        </div>
    );
};

export default FriendDetails;