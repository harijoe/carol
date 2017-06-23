import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label } from 'components'

storiesOf('Label', module)
  .add('Default', () => (
    <Label>Link Sample</Label>
  ))
  .add('Reverse', () => (
    <Label reverse>Label Sample</Label>
  ))
