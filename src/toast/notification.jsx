import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Notice from "./notice";
import classNames from "classnames";
import "./styles/toast.less";

class Notification extends Component {
  constructor() {
    super();
    this.transitionTime = 300;
    this.state = { notices: [], fadeOut: false};
  }

  getNoticeKey = () => {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`;
  };

  addNotice = (notice) => {
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    if (notices.every((item) => item.key !== notice.key)) {
      notices.push(notice);
      this.setState({ notices, fadeOut: true });
      setTimeout(() => {
        this.removeNotice(notice.key);
      }, notice.duration);
    }
  };

  removeNotice = (key) => {
    const { notices } = this.state;
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          return false;
        }
        return true;
      }),
    });
  };

  render() {
    const { notices } = this.state;
    const fldToast = classNames({
      "fld-toast": true,
    });
    const fldToastAnimation = classNames({
      "fld-toast_animation": true,
      notice: true,
    });
    return (
      <TransitionGroup className={fldToast}>
        {notices.map((notice) => (
          <CSSTransition
            key={notice.key}
            classNames={fldToastAnimation}
            timeout={this.transitionTime}
          >
            <Notice {...notice} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      // <>
      //   <div className={fldToast}>
      //     {notices.map((notice) => (
      //       <div key={notice.key} className={`${ this.state.fadeOut ? "fld-toast_animation__fadeOut" : "fld-toast_animation__fadeIn"}`}>
      //         <Notice {...notice} />
      //       </div>
      //     ))}
      //   </div>
      // </>
    );
  }
}

export default Notification;
