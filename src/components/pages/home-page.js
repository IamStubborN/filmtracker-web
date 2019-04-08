import React, {Component} from 'react';
import FilmList from '../film-list';
import Paginator from "../paginator";
import {compose} from "../../utils";
import {withApiService} from "../hoc";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { changePage } from "../../actions";

class HomePage extends Component {
    componentWillReceiveProps(nextProps, nextContext) {
        const { match, changePage } = nextProps;
        let id = "1";
        if (match.params.id !== null) {
            id = match.params.id
        }
        changePage(id);
    }

    render() {
        return (
            <>
                <FilmList />
                <Paginator/>
            </>
        );
    }
}

const mapStateToProps = ({filmList : { page }}) => {
    return { page: page };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

    return bindActionCreators({
        changePage: changePage(apiService),
    }, dispatch);
};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
