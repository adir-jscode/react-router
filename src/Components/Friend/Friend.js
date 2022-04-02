import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { username, name, id } = props.friend;
    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showFriendDetail} >{username}:{id}</button>
            <br />
            <Link to={"/friend/"+id}>Detail</Link>
        </div>
    );
};

export default Friend;