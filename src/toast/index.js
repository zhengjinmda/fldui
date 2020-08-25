import React from 'react';
import createToast from './Toast.jsx'

// toastContent 用于保存 createToast 返回的对象
let toastContent

const toast = (type, content, duration = 2000, onClose) => {
    if (!toastContent) {
        toastContent = createToast
    }
    return toastContent.addToast({type, content, duration, onClose})
}

export default {
    info(content, duration, onClose) {
        return toast('info', content, duration, onClose)
    },
    success(content, duration, onClose) {
        return toast('success', content, duration, onClose)
    },
    warning(content, duration, onClose) {
        return toast('warning', content, duration, onClose)
    },
    error(content, duration, onClose) {
        return toast('error', content, duration, onClose)
    },
    loading(content, duration, onClose) {
        return toast('loading', content, duration, onClose)
    }
};