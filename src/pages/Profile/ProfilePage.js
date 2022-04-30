import React from 'react';
import { Link } from 'react-router-dom';


function ProfilePage() {
    return (
        <>
            <h1>Profile page</h1>
            <section>
                <h2>Personal data</h2>
                <p><strong>Username:</strong></p>
                <p><strong>Email:</strong></p>
            </section>
            <section>
                <h2>Personal profile content</h2>
                <p>Personal info</p>
            </section>
            <p>Back to <Link to="/">Home</Link></p>
        </>
    );
}

export default ProfilePage;