/*
  JS equivalent to PHP's strip_tags
 */
export default function (rawHtml) {
  const html = rawHtml
  const div = document.createElement('div')

  div.innerHTML = html

  return div.textContent || div.innerText || ''
}
