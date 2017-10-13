export default websiteUrl => (websiteUrl.startsWith('http') ? websiteUrl : `http://${websiteUrl}`)
