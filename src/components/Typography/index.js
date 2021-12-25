import React from 'react'
import { makeStyles } from '@material-ui/styles'
import cx from 'classname'
import PropTypes from 'prop-types'
import {
  Typography as MuiTypography, useTheme,
} from '@material-ui/core'

import styles from './styles'

const useStyles = makeStyles(styles)

const Typography = ({
  variant,
  className,
  color,
  ...props
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <MuiTypography
      variant="body1"
      className={cx(className, classes[variant])}
      style={{
        color: theme.palette.common[color],
      }}
      {...props}
    />
  )
}

Typography.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf([
    'header',
    'title',
    'body',
    'subtext',
    'caption',
    'overline',
    'action',
    'mini',
    'highlight1',
    'highlight2',
    'highlight3',
    'button', // web button
    'button1',
    'button2',
    'button3',
    'headline1',
    'headline2',
    'headline3',
  ]),
  className: PropTypes.string,
}

Typography.defaultProps = {
  color: 'base6',
  variant: 'body',
  className: null,
}

export default Typography
