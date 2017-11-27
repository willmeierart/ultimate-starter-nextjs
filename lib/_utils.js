export const binder = (x, Ms) => Ms.forEach(m => (x[m] = x[m].bind(x)))
