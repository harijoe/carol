export default input => typeof input === 'string' ? input.charAt(0).toUpperCase() + input.slice(1) : input
