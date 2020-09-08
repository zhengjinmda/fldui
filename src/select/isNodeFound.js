const isNodeFound = (current, componentNode) => {
    if (current === componentNode) return true
    while (current.parentNode) {
        if (current.parentNode === componentNode) {
            return true
        }
        current = current.parentNode
    }

    return false
}

export { isNodeFound }