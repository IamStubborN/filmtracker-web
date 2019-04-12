import React, {Component} from 'react';

import classes from './paginator.module.scss'
import {Link, withRouter} from "react-router-dom";
import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";
import {withApiService} from "../hoc";

class Paginator extends Component {

    state = {
        count: 0,
        page: 1
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
            if (nextState.page > nextState.count) {
                this.props.history.push(`/found404`)
            }
        }
    }
    setPageCount = () => {
        const { getApiOverview } = this.props.apiService;
        getApiOverview()
            .then(data => {
                this.setState({count: Math.ceil(data.FilmsCount / 9)});
            })
    };

    setCurrentPage = (id) => {
        this.setState({page: id})
    };

    render() {
        const { currentPage, pageCount } = this.state;
        const page = parseInt(currentPage);
        const count = parseInt(pageCount);
        const isCurrent0 = page == 1 ? 1 : page - 1;
        const isCurrent1 = page >= count ? count : page + 1;
        const isCurrent2 = page + 1 >= count ? count : page + 1;
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