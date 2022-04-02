import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <p> Total friends: {friends.length}</p>
            {
                friends.map(friend =><Friend friend={friend} ></Friend>)
            }
        </div>
    );
};

export default Friends;