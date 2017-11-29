import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from 'components/Loading'

storiesOf('Loading', module).add('Default', () => <Loading loading />).add('With children', () => <Loading>Loading</Loading>)
