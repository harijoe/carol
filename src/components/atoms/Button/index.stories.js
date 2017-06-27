import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components'

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('button-click')} block={false}>Sample Action</Button>
  ))
  .add('large', () => (
    <Button onClick={action('button-click')} large>Sample Action</Button>
  ))
  .add('Secondary', () => (
    <Button onClick={action('button-click')} secondary>Sample Action</Button>
  ))
  .add('Disabled', () => (
    <Button onClick={action('button-click')} disabled>Sample Action</Button>
  ))
  .add('With loading', () => (
    <Button onClick={action('button-click')} loading>Sample Action</Button>
  ))
