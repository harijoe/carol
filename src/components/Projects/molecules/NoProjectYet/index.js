import React from 'react'
import { FormattedMessage } from 'react-intl'
import Section from 'components/Section'
import Link from 'components/Link'

const NoProjectYet = () =>
  <Section>
    <FormattedMessage id="project.list.empty" />
    <Link button large to="/project-elaboration">
      <FormattedMessage id="project.list.new_project" />
    </Link>
  </Section>

export default NoProjectYet
