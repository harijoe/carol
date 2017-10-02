export default intl => message => `${message}${intl.locale === 'fr' ? ' ' : ''}: `
