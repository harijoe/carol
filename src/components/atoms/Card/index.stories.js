import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from 'components'

storiesOf('Card', module)
  .add('Default', () => (
    <Card>
      <img src="http://lorempixel.com/400/200/sports/" alt="Alt Sample" />
    </Card>
  ))
  .add('With strong shadow', () => (
    <Card strongShadow>
      <img src="http://lorempixel.com/400/200/sports/" alt="Alt Sample" />
    </Card>
  ))
