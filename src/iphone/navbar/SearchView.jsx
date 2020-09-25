import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import onclickoutside from 'react-onclickoutside';
import '../styles/searchView.less';

class SearchView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      firstFlag: false,
      value: '',
      label: '',
      AllSearchList: [
        { value: '1', label: '查找零售店' },
        { value: '2', label: 'Apple Store 商店在线选购' },
        { value: '3', label: '配件' },
        { value: '4', label: 'AirPods' },
        { value: '5', label: 'iPod' },
        { value: '6', label: 'Mac' },
        { value: '7', label: 'iPhone' },
        { value: '8', label: 'watch' },
        { value: '9', label: 'iPad' },
      ],
      searchList: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isShow: props.isShow,
    };
  }

  componentDidMount() {
    this.fuzzyQuery();
  }

  handleClickOutside = () => {
    this.props.cancelQuery();
    this.setState({
      label: '',
    });
    this.fuzzyQuery();
  };

  handleDropdownClick = () => {
    this.props.cancelQuery();
    this.setState({
      label: '',
    });
  };

  handleLabelChange = (e) => {
    const value = e.target.value;
    this.setState(
      {
        label: value,
      },
      () => {
        this.fuzzyQuery();
      },
    );
  };

  fuzzyQuery = () => {
    let el = [];
    this.state.AllSearchList.forEach((item) => {
      if (item.label.toLowerCase().indexOf(this.state.label.toLowerCase()) >= 0) {
        el.push(item);
      }
    });

    this.setState(
      {
        searchList: [],
      },
      () => {
        this.setState({
          searchList: el,
        });
      },
    );
  };

  render() {
    const fldSearchView = classNames({
      'fldSearchView': true,
    });
    const fldSearchViewSearchBar = classNames({
      'fldSearchView-searchBar': true,
      'fldSearchView-searchBar_fadeIn': this.state.isShow,
    });
    const fldSearchViewDropdown = classNames({
      'fldSearchView-dropdown': true,
      'fldSearchView-dropdown_show': this.state.isShow,
    });
    const fldSearchViewDropdownItem = classNames({
      'fldSearchView-dropdown_content__dropDownItem': true,
      'fldSearchView-dropdown_content__dropDownItem___fadeIn': this.state.isShow,
    });

    return (
      <>
        <div className={fldSearchView}>
          <div className={fldSearchViewSearchBar}>
            <i className="iconfont icon-search fldSearchView-searchBar_icon" />
            <input
              onInput={this.handleLabelChange}
              placeholder="搜索 apple.com.cn"
              value={this.state.label}
              className="iconfont icon-search fldSearchView-searchBar_input"
            />
            <i className="iconfont icon-cha fldSearchView-searchBar_icon" onClick={this.props.cancelQuery} />
          </div>
          <div className={fldSearchViewDropdown}>
            <div className="fldSearchView-dropdown_content">
              <div>
                <p className="fldSearchView-dropdown_content__title">快速链接</p>
              </div>
              <div>
                <ul className="fldSearchView-dropdown_content__title">
                  {this.state.searchList.map((item) => {
                    return (
                      <li
                        key={item.value}
                        onClick={this.handleDropdownClick}
                        className={fldSearchViewDropdownItem}
                      >
                        {item.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SearchView.defaultProps = {
  isShow: false,
};

SearchView.propTypes = {
  isShow: propTypes.bool,
};

export default onclickoutside(SearchView);