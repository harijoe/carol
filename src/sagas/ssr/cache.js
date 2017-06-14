/*
 This file is used to store cached response during ssr
 */
let storage = {}

export const reset = () => (storage = {})

export default () => storage
