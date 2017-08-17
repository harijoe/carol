import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from 'components'

const validated = 'validated'
const notValidated = 'not-validated'
const camera = 'camera'
const send = 'send'

storiesOf('Icon', module)
  .add('Default', () => <Icon icon={validated} />)
  .add('With icon error (Sample)', () => <Icon icon={notValidated} />)
  .add('With camera error (Sample)', () => <Icon icon={camera} />)
  .add('With send error (Sample)', () => <Icon icon={send} />)
  .add('With size (200)', () => <Icon size={200} icon={validated} />)
