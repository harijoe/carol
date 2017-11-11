export default name => name.replace(/(\S* )?(.).*/, (_, first, last) => `${first || ''}${last.toLocaleUpperCase()}.`)
