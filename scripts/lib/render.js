import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

const createRenderer = () => markdownIt({ breaks: true })

const rendererWithAttributes = createRenderer().use(markdownItAttrs)

export const renderer = createRenderer()

export default (...args) => {
  try {
    return rendererWithAttributes.renderInline(...args)
  } catch (e) {
    return renderer.renderInline(...args)
  }
}
