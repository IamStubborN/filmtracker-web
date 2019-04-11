import React from 'react';
import Auth from "../auth";

const MainPage = (props) => {
    return <Auth isLoggedIn={props.isLoggedIn} onLogIn={props.onLogIn}/>;
};

export default MainPage;