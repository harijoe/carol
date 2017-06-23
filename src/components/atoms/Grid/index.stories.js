import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from 'components'

storiesOf('Grid', module)
  .add('Default', () => (
    <Grid>
      Grid Content
    </Grid>
  ))
  .add('Fluid', () => (
    <Grid fluid>
      Grid Content
    </Grid>
  ))
  .add('Narrow', () => (
    <Grid narrow>
      Grid Content
    </Grid>
  ))
