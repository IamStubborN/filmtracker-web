import React from 'react';
import classes from './header.module.scss';
import { Link } from 'react-router-dom';
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { Row, Button } from "reactstrap"

fontawesome.library.add(faShoppingCart);

const Header = ({ numItems, total }) => {
  return (
    <Row className={classes.shopHeader} as={'header'} >
      <Link to="/">
        <div className={`${classes.logo} text-dark`}>Film Tracker</div>
      </Link>
        <Button >Войти</Button>

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

export default Header;
