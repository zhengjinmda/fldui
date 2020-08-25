import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Content from "./Content";
import ReactDOM from 'react-dom'

class Toast extends Component {
  constructor(props) {
    super(props);
    this.transitionTime = 300;
    this.state = { toasts: [] };
  }

  // 获取唯一的 key
  getToastLey = () => {
    const { toasts } = this.state;
    return `toast-${new Date().getTime()}-${toasts.length}`;
  };

  addToast = (toast) => {
    const { toasts } = this.state;
    toast.key = this.getToastLey();
    if (toasts.every((item) => item.key !== toast.key)) {
      if (toasts.length > 0 && toasts[toasts.length - 1].type === "loading") {
        toasts.push(toast);
        setTimeout(() => {
          this.setState({ toasts });
        }, this.transitionTime);
      } else {
        toasts.push(toast);
        this.setState({ toasts });
      }
      if (toast.duration > 0) {
        setTimeout(() => {
          this.removeToast(toast.key);
        }, toast.duration);
      }
      return () => {
        this.removeToast(toast.key);
      };
    }
  };

  removeToast = (key) => {
    const { toasts } = this.state;
    this.setState({
      toasts: toasts.filter((toast) => {
        if (toast.key === key) {
          if (toast.onClose) {
            setTimeout(toast.onClose, this.transitionTime);
            return false;
          }
        }
        return true;
      }),
    });
  };
  render() {
    const { toasts } = this.state;
    return (
      <div>
        {toasts.map((toast) => {
          <Content {...toast} />;
        })}
      </div>
    );
  }
}

// 给 toast 创建容器 并暴露 添加 toast 和移出的方法
const createToast = () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()
  ReactDOM.render(<Toast ref={ref} />, div)
  return {
      addToast(toast) {
          return ref.current.addToast(toast)
      },
      destroy() {
          ReactDOM.unmountComponentAtNode(div)
          document.body.removeChild(div)
      }
  }
}

export default createToast()