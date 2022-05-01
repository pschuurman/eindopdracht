import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import styles from './ProfilePage.module.css';


function ProfilePage() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className={styles.margin}>
                <h3>Welcome to your personal profile page</h3>
                <section>
                    <h6>Your personal data</h6>
                    <p>Username:</p>
                    <p>Email:</p>
                </section>
                <section>
                    <h6>Personal profile content</h6>
                    <p>Your personal and private information</p>
                </section>
            </main>

        </>
    );
}

export default ProfilePage;