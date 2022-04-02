import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const params = useParams();
    const { friendId } = params;
    // const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(response => response.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>Details showing {params.friendId}</h1>
            <h1> userName: {friend.username}</h1>
            <p>ID : {friend.id}</p>
            <p><small>Phone : {friend.phone}</small></p>
            <p>Address : {friend.address?.city}</p>
            <p>LAT: { friend.address?.geo.lat}</p>
        </div>
    );
};

export default FriendDetails;