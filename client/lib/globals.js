const REDUX = 'REDUX'
const CONTEXT = 'CONTEXT'
export const storeMode = REDUX

export const IS_SSR = !(typeof window !== 'undefined' && window.document)

