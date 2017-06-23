import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProfileImage } from 'components'

storiesOf('ProfileImage', module)
  .add('Default', () => (
    <ProfileImage imageLink={'http://lorempixel.com/400/200/sports'} />
  ))
