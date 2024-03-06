import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((r) => r.json())
            .then((d) => setUser(d));
    }, [id]);

    const img = user.profilePic
    const fallbackImage = "https://source.unsplash.com/random/1600x900"
    return (
        <div >
            <NavBar />
            <div style={styles.profileContainer}>
                <div style={styles.profileImageContainer}>
                    <img src={user.profilePic ? img : fallbackImage} alt="User Profile" style={styles.profileImage} />
                </div>
                <h1 style={styles.userName}>{user.name}</h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quae?</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
    },
    profileImageContainer: {
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    profileImage: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    },
    userName: {
        marginTop: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
};

export default UserProfile;