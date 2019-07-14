import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../actions/index'
import('./Header.css');

class Header extends React.Component {
    render() {
        return <div className="header-content">{this.props.articles.length}
            {this.props.articles.map((value, index) =>{
                return <div key={value.key}>{value.name}{index}</div>
            })}
        </div>;
    }
    componentDidMount() {
        // debugger
        this.props.pageActions.addArticle();

        // this.setState( { type: "ADD_ARTICLE", data: [] });
        // debugger
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}


// const Header = () => (
//     <div className="header-content">Header</div>
// );

export default connect(mapStateToProps, mapDispatchToProps)(Header)