import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import styles from './Navbar.module.css'

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <>
            <nav>

                <button
                    className={styles["button-design"]}
                    type="button" onClick={() => history.push('/')}
                >
                    Home
                </button>


                {isAuth ?
                    <>

                        <button
                            className={styles["button-design"]}
                            type="button" onClick={logout}
                        >
                            Logout
                        </button>


                        <button
                            className={styles["button-design"]}
                            type="button"
                            onClick={() => history.push("/profile")}
                        >
                            Profile
                        </button>

                    </>
                    :
                    <>

                        <button
                            className={styles["button-design"]}
                            type="button"
                            onClick={() => history.push("/login")}
                        >
                            Login
                        </button>


                        <button
                            className={styles["button-design"]}
                            type="button"
                            onClick={() => history.push("/register")}
                        >
                            Register
                        </button>


                    </>


                }


            </nav>
        </>

    );
}

export default NavBar;