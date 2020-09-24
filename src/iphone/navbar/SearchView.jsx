import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './styles/searchView.less';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: false
         }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            isShow: props.isShow,
        }
    }

    render() {
        console.log(this.state.isShow)
        const fldSearchView = classNames({
            'fldSearchView': true,
        })
        const fldSearchViewSearchBar = classNames({
            'fldSearchView_searchBar': true,
            'fldSearchView_searchBar__fadeIn': this.state.isShow
        })
        return ( 
            <>
                <div className={fldSearchView}>
                    <div className={fldSearchViewSearchBar}>
                        <i className="iconfont icon-search fldSearchView_searchBar__icon" />
                        <input className="iconfont icon-search fldSearchView_searchBar__input" placeholder='搜索 apple.com.cn' />
                        <i className="iconfont icon-cha fldSearchView_searchBar__icon" onClick={this.props.cancelQuery} />
                    </div>
                    <div></div>
                </div>
            </>
         );
    }
}

SearchView.defaultProps = {
    isShow: false
}

SearchView.propTypes = {
    isShow: propTypes.bool,
}
 
export default SearchView;