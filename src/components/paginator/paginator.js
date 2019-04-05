import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";

import classes from './paginator.module.scss'
import {Link} from "react-router-dom";

const Paginator = () => {
    return (
        <Row className={classes.pag}>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Link to="/films/page/2">
                    <Pagination.Item disabled>
                        {1}
                    </Pagination.Item>
                </Link>
                <Link to="/films/page/2">
                    <Pagination.Item disabled>{2}</Pagination.Item>
                </Link>
                <Link to="/films/page/3">
                    <Pagination.Item disabled>{3}</Pagination.Item>
                </Link>
                <Link to="/films/page/694">
                <Pagination.Ellipsis disabled/>
                </Link>
                <Link to="/films/page/694">
                    <Pagination.Item disabled>{694}</Pagination.Item>
                </Link>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </Row>)
};

export default Paginator;