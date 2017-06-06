import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Button, Block, List, Image, Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};
`

const Error = styled(Block)`
  margin: 0.5rem 0 0;
`

const StyledDropzone = styled(Dropzone)`
  position: relative;
  z-index: 1;
  display: none;
  flex-direction: column;
  justify-content: center;
  padding: ${theme('spaces.s')};
  height: 12.5rem;
  width: 12.5rem;
  overflow: hidden;
  font-size: ${theme('fonts.size.s')};
  text-align: center;
  color: ${theme('colors.grayscale.medium')};
  border-radius: 0.5rem;
  border: 0.1rem dashed ${theme('colors.grayscale.light')};

  ${breakpoint('l')`
    display: flex;
  `}
`

const TextWrapper = styled.div`
  margin: 0;

  p {
    margin-top: 0;
  }

  ${breakpoint('l')`
    flex: 1 1 0;
    padding-left: ${theme('spaces.l')};
  `}
`

const PreviewWrapper = styled.figure`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 12.5rem;
  width: 12.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(235, 235, 235, 0.9);
    content: '';
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
const StyledButton = styled(Button)`
  span {
    vertical-align: middle;

    &:first-child {
      margin-right: ${theme('spaces.s')};
    }
  }

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg .camera {
      fill: ${theme('colors.white')};
    }
  }
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
        <PreviewWrapper>
          {this.state.files.map((file, i) =>
            <Image key={i} alt="preview" width={preview.width || 200} src={file.preview} />
          )}
        </PreviewWrapper>
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
      <Wrapper>
        <StyledDropzone
          {...field}
          ref={(node) => { this.dropzone = node }}
          onDrop={(filesToUpload, e) => this.handleChange(filesToUpload, e)}
          name={name}
          accept={accept}
        >
          <span><FormattedMessage id="user.drop_img" /></span>
          {preview ? previewImg(this.state.files) : null}
        </StyledDropzone>
        <TextWrapper>
          <p><FormattedMessage id="user.drop_text" /></p>
          <StyledButton type="button" onClick={this.onOpenClick} highlight>
            <Icon icon="camera" /><FormattedMessage id="user.choose_img" />
          </StyledButton>
        </TextWrapper>

        {fileNames(this.state.files)}
        {touched && error &&
          <Error id={`${name}Error`} role="alert" color="danger" transparent>
            <FormattedMessage id={error.id} values={error.values} />
          </Error>
        }
      </Wrapper>
    )
  }
}

export default RenderDropzone
