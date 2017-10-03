import markdownIt from 'markdown-it'
import attributesPlugin from 'markdown-it-attrs'
import emojisPlugin from 'markdown-it-emoji'

const createRenderer = () => markdownIt({ breaks: true })

const rendererWithAttributes = createRenderer()
  .use(attributesPlugin)
  .use(emojisPlugin)

export const renderer = createRenderer()

export default (...args) => {
  try {
    return rendererWithAttributes.renderInline(...args)
  } catch (e) {
    return renderer.renderInline(...args)
  }
}
