export function deepCopy(target) {
    const type = typeof target

    if (target === null || type === 'boolean' || type === 'number' || type === 'string') {
        return target
    }

    if (target instanceof Date) {
        return new Date(target.getTime())
    }

    if (Array.isArray(target)) {
        return target.map((o) => deepCopy(o))
    }

    if (typeof target === 'object') {
        const obj = {}

        for (let key in target) {
            obj[key] = deepCopy(target[key])
        }

        return obj
    }

    return undefined
}