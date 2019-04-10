import React, {Component} from 'react';

import classes from './paginator.module.scss'
import {Link, withRouter} from "react-router-dom";
import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import {withApiService} from "../hoc";

class Paginator extends Component {

    state = {
        pageCount: 0,
        currentPage: 1
    };

    componentDidMount() {
        let { id } = this.props.match.params;
        if (id === undefined) {
            id = 1
        }
        this.setPageCount();
        this.setCurrentPage(id);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            let { id } = nextProps.match.params;
            if (id === undefined) {
                id = 1
            }
            this.setCurrentPage(id);
        }
    }
    setPageCount = () => {
        const { getApiOverview } = this.props.apiService;
        getApiOverview()
            .then(data => {
                this.setState({pageCount: Math.round(data.FilmsCount / 9)});
            })
    };

    setCurrentPage = (id) => {
        this.setState({currentPage: id})
    };

    render() {
        const { currentPage, pageCount } = this.state;
        const isCurrent0 = currentPage == 1 ? 1 : currentPage - 1;
         return (
            <Row className={classes.pag}>
                <Pagination>
                    <PaginationItem>
                        <Link to="/films/page/1">
                            <PaginationLink first/>
                        </Link>
                    </PaginationItem>
                    <PaginationItem >
                        <Link to={`/films/page/${isCurrent0}`}>
                            <PaginationLink previous/>
                        </Link>
                    </PaginationItem>
                    <PaginationItem active>
                        <Link to={`/films/page/${+currentPage}`}>
                            <PaginationLink>{+currentPage}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${+currentPage+1}`}>
                            <PaginationLink>{+currentPage+1}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${+currentPage+2}`}>
                            <PaginationLink>{+currentPage+2}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${+currentPage+1}`}>
                            <PaginationLink next/>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${pageCount}`}>
                            <PaginationLink last/>
                        </Link>
                    </PaginationItem>
                </Pagination>
            </Row>)
    }
}

export default withRouter(withApiService(Paginator));