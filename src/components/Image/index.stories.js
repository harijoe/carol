import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from 'components/Image'

storiesOf('Image', module)
  .add('Default', () => <Image src={'http://lorempixel.com/400/200/sports/1/'} />)
  .add('With alt attributes', () => <Image src={'http://lorempixel.com/400/200/sports/1/'} alt={'Alt Sample'} />)
