import React from 'react';
import ReactDOM from "react-dom";
import Notification from './notification';

// 创建整个 toast 的 DOM 容器并返回添加 toast 和删除整个节点的方法
function createNotification() {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ref = React.createRef();
    ReactDOM.render(<Notification ref={ref} />, div);
    return {
        addNotice(notice) {
            return ref.current.addNotice(notice);
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
}

let notification;
const notice = (type, content, duration = 2000, onClose) => {
    if (!notification) notification = createNotification();
    return notification.addNotice({ type, content, duration, onClose });
}

export default {
    info(content, duration, onClose) {
        return notice('info', content, duration, onClose);
    },
    success(content, duration, onClose) {
        return notice('success', content, duration, onClose);
    },
    warning(content, duration, onClose) {
        return notice('warning', content, duration, onClose);
    },
    error(content, duration, onClose) {
        return notice('error', content, duration, onClose);
    },
}