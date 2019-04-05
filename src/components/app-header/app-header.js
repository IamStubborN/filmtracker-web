import React from 'react';
import classes from './app-header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";

fontawesome.library.add(faShoppingCart);

const AppHeader = ({ numItems, total }) => {
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

export default AppHeader;
