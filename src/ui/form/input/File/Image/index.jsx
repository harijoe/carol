import React, { Component } from 'react'
import Img from '../../../Img'

class InputFileImage extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  previewFile(e) {
    const reader  = new FileReader()

    reader.addEventListener('load', () => {
      const result = reader.result
      const props = this.props

      if (props.src !== result) {
        props.onChange({
          target: {
            name: props.attr.name,
            src: result
          }
        })
      }
    }, false)

    reader.readAsDataURL(e.target.files[0])
  }

  preview() {
    if (!this.props.preview) {
      return null
    }

    return (
      <Img
        {...this.props.attrPreview}
      />
    )
  }

  handleChange(e) {
    if (!this.props.preview) {
      return null
    }

    return this.previewFile(e)
  }

  render() {
    return (
      <div>
        <input
          {...this.props.attr}
          type="file"
          onChange={this.handleChange}
          accept={this.props.accept}
        /><br />
        {this.preview()}
      </div>
    )
  }
}

InputFileImage.propTypes = {
  attr: React.PropTypes.shape({
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }),
  attrPreview: React.PropTypes.shape({
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    alt: React.PropTypes.string,
    src: React.PropTypes.string
  }),
  preview: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired,
  accept: React.PropTypes.string
}

InputFileImage.defaultProps = {
  preview: false,
  accept: 'image/png, image/jpeg, image/jpg'
}

export default InputFileImage
