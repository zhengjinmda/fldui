export const isNodeFound = (current, componentNode) => {
    if (current === componentNode) {
        return true;
    }

    while (current.parentNode) {
        current = current.parentNode;
        if (current === componentNode) {
            return true;
        }
    }

    return false;
};