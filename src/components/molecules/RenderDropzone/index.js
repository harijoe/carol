import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import { Button, Block, List, Image } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
`

class RenderDropzone extends Component {
  static defaultProps = {
    accept: 'image/png, image/jpeg, image/jpg',
  }

  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.shape({
        id: PropTypes.string,
        values: PropTypes.object,
      }),
    }).isRequired,
    preview: PropTypes.shape({
      initialValue: PropTypes.string,
      width: PropTypes.number,
    }),
    accept: PropTypes.string,
  }

  constructor() {
    super()

    this.onFileDrop = this.onFileDrop.bind(this)
    this.onOpenClick = this.onOpenClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      files: [],
    }
  }

  componentWillReceiveProps(props) {
    if (!(this.props.preview && this.state.files.length === 0 && props.preview.initialValue)) {
      return null
    }

    return this.setState({
      files: [{
        preview: props.preview.initialValue,
        name: '',
      }],
    })
  }

  onFileDrop(acceptedFiles) {
    if (!acceptedFiles.length) {
      return null
    }

    return this.setState({
      files: acceptedFiles,
    })
  }

  onOpenClick() {
    this.dropzone.open()
  }

  previewFile(e) {
    const reader = new window.FileReader()

    reader.onloadend = (() => {
      const base64data = reader.result

      this.props.input.onChange(base64data)
    })
    reader.readAsDataURL(e[0])
  }

  handleChange(e) {
    if (!this.props.preview) {
      return null
    }

    this.onFileDrop(e)

    return this.previewFile(e)
  }

  render() {
    const { input: { name }, preview, accept, meta: { touched, error }, ...field } = this.props
    const previewImg = (files) => {
      if (!files) {
        return null
      }

      return (
        <div>
          {this.state.files.map((file, i) =>
            <Image key={i} alt="preview" width={preview.width || 200} src={file.preview} />
          )}
        </div>
      )
    }

    const fileNames = (files) => {
      if (!(files.length > 0 && files[0].name)) {
        return null
      }

      return (
        <List>
          {this.state.files.map((file, i) =>
            <li key={i}>{file.name}</li>
          )}
        </List>
      )
    }

    return (
      <div>
        <Button type="button" onClick={this.onOpenClick}>
          <FormattedMessage id="user.choose_img" />
        </Button>
        <Dropzone
          {...field}
          ref={(node) => { this.dropzone = node }}
          onDrop={(filesToUpload, e) => this.handleChange(filesToUpload, e)}
          name={name}
          accept={accept}
        >
          <div><FormattedMessage id="user.drop_img" /></div>
        </Dropzone>

        {preview ? previewImg(this.state.files) : null}
        {fileNames(this.state.files)}
        {touched && error &&
          <Error id={`${name}Error`} role="alert" color="danger" transparent>
            <FormattedMessage id={error.id} values={error.values} />
          </Error>
        }
      </div>
    )
  }
}

export default RenderDropzone
