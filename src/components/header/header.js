import React from 'react';
import classes from './header.module.scss';
import {Link, withRouter} from 'react-router-dom';
import { Row, Button } from "reactstrap"
import Cookies from 'js-cookie';

const Header = (props) => {
    const onQuit = (e) => {
        e.preventDefault();
        Cookies.remove("Token");
        Cookies.remove("Refresh");
        props.history.push("/")
    };

  return (
    <Row className={classes.shopHeader} as={'header'} >
      <Link to="/">
        <div className={`${classes.logo} text-dark`}>Film Tracker</div>
      </Link>
        <Button onClick={onQuit}>Выйти</Button>

        {/*<Modal show={true}>*/}
            {/*<Modal.Header closeButton>*/}
                {/*<Modal.Title>Modal heading</Modal.Title>*/}
            {/*</Modal.Header>*/}
            {/*<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>*/}
            {/*<Modal.Footer>*/}
                {/*<Button variant="secondary">*/}
                    {/*Close*/}
                {/*</Button>*/}
                {/*<Button variant="primary" >*/}
                    {/*Save Changes*/}
                {/*</Button>*/}
            {/*</Modal.Footer>*/}
        {/*</Modal>*/}
    </Row>
  );
};

export default withRouter(Header);
