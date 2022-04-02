import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { username, name, id } = props.friend;
    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showFriendDetail} >{username}:{id}</button>
        </div>
    );
};

export default Friend;