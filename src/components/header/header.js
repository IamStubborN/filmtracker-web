import React from 'react';
import classes from './header.module.scss';
import {Link, withRouter} from 'react-router-dom';
import { Row, Button } from "reactstrap"

const Header = (props) => {

  return (
    <Row className={classes.shopHeader} as={'header'} >
      <Link to="/films/page/1">
        <div className={`${classes.logo} text-dark`}>Film Tracker</div>
      </Link>
        {props.isLoggedIn ? <Button color={"danger"} onClick={props.onQuit}>Выйти</Button> : null}
    </Row>
  );
};

export default withRouter(Header);
