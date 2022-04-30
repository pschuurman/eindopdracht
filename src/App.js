import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import AllergyFreePage from './pages/AllergenFree/AllergyFreePage';
import ChooseKitchenPage from './pages/ChooseKitchen/ChooseKitchenPage';
import MoodForFoodPage from './pages/MoodForFood/MoodForFoodPage';
import SurpriseMePage from './pages/SurpriseMe/SupriseMePage';
import WhatsInYourFridgePage from './pages/WhatsInYourFridge/WhatsInYourFridgePage';
import LoginPage from './pages/Login/LoginPage';
import CookOnTimePage from "./pages/CookOnTime/CookOnTimePage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import {AuthContext} from "./context/AuthContext";

function App () {
    const { isAuth } = useContext(AuthContext);

    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/choose-your-kitchen">
                <ChooseKitchenPage   />
            </Route>
            <Route path="/what-is-in-your-fridge">
                <WhatsInYourFridgePage />
            </Route>
            <Route path="/mood-for-food">
                <MoodForFoodPage />
            </Route>
            <Route path="/surprise-me">
                <SurpriseMePage />
            </Route>
            <Route path="/allergen-free">
                <AllergyFreePage />
            </Route>
            <Route path="/right-on-time">
                <CookOnTimePage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route path="/profile">
                {isAuth ?  <ProfilePage /> : <Redirect to="/" />}
            </Route>
        </Switch>

    );
}

export default App;