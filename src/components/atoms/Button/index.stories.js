import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components'

storiesOf('Button', module)
  .add('Default', () =>
    <Button onClick={action('button-click')} block={false}>
      Sample Action
    </Button>,
  )
  .add('Secondary', () =>
    <Button onClick={action('button-click')} state="secondary">
      Sample Action
    </Button>,
  )
  .add('Secondary Outline', () =>
    <Button onClick={action('button-click')} state="secondary" outline>
      Sample Action
    </Button>,
  )
  .add('Third', () =>
    <Button onClick={action('button-click')} state="third">
      Sample Action
    </Button>,
  )
  .add('Third Outline', () =>
    <Button onClick={action('button-click')} state="third" outline>
      Sample Action
    </Button>,
  )
  .add('MaxWidth', () =>
    <Button onClick={action('button-click')} maxWidth>
      Sample Action
    </Button>,
  )
  .add('Center', () =>
    <Button onClick={action('button-click')} maxWidth center>
      Sample Action
    </Button>,
  )
  .add('large', () =>
    <Button onClick={action('button-click')} large>
      Sample Action
    </Button>,
  )
  .add('Disabled', () =>
    <Button onClick={action('button-click')} disabled>
      Sample Action
    </Button>,
  )
  .add('With loading', () =>
    <Button onClick={action('button-click')} loading>
      Sample Action
    </Button>,
  )
