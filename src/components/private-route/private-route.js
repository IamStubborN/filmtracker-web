import {Route, Redirect} from "react-router-dom";
import React from "react";

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => isLoggedIn === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
};
export default PrivateRoute