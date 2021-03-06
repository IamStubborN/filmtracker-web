import React, {Component} from 'react';

import classes from './paginator.module.scss'
import {Link, withRouter} from "react-router-dom";
import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import {withApiService} from "../hoc";

class Paginator extends Component {

    state = {
        currentPage: 0,
        pageCount: 1
    };

    componentDidMount() {
        let { id } = this.props.match.params;
        if (id === undefined) {
            id = 1
        }
        this.setPageCount();
        this.setCurrentPage(id);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            let { id } = nextProps.match.params;
            if (id === undefined) {
                id = 1
            }
            this.setCurrentPage(id);
            if (nextState.currentPage > nextState.pageCount) {
                this.props.history.push(`/found404`)
            }
        }
    }
    setPageCount = () => {
        const { getApiOverview } = this.props.apiService;
        getApiOverview()
            .then(data => {
                console.log(data)
                this.setState({pageCount: Math.ceil(data.films_count / 9)});
            })
    };

    setCurrentPage = (id) => {
        this.setState({currentPage: id})
    };

    render() {
        const { currentPage, pageCount } = this.state;
        console.log(pageCount)
        const page = parseInt(currentPage);
        const count = parseInt(pageCount);
        const isCurrent0 = page === 1 ? 1 : page - 1;
        const isCurrent1 = page >= count ? count : page + 1;
        const isCurrent2 = page + 1 >= count ? count : page + 2;
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
                        <Link to={`/films/page/${page}`}>
                            <PaginationLink>{page}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${isCurrent1}`}>
                            <PaginationLink>{isCurrent1 >= count ? (page + 1) : isCurrent1}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${isCurrent2}`}>
                            <PaginationLink>{isCurrent2 >= count ? (page + 2) : isCurrent2}</PaginationLink>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${+isCurrent1}`}>
                            <PaginationLink next/>
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <Link to={`/films/page/${count}`}>
                            <PaginationLink last/>
                        </Link>
                    </PaginationItem>
                </Pagination>
            </Row>)
    }
}

export default withRouter(withApiService(Paginator));