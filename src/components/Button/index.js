import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import cx from 'classname'
import {
  Button as MuiButton,
  CircularProgress, useTheme,
} from '@material-ui/core'

import Typography from '~/components/Typography'


import styles from './styles'

const useStyles = makeStyles(styles)

const Button = ({
  color,
  variant,
  loading,
  endIcon,
  children,
  disabled,
  textColor,
  className,
  ...props
}) => {
  const classes = useStyles({ disabled, color })
  const theme = useTheme()

  let primaryColors = ['pureWhite', 'primary']
  if (variant !== 'contained') {
    primaryColors = primaryColors.reverse()
  }

  const defaultTextColor = [
    'primary',
    'secondary',
    'base6',
    'base7',
    'supportGreen',
    'supportRed',
    'supportOrange',
    'brandYellow',
    'brandBlue0',
  ].includes(color) ? primaryColors[0] : primaryColors[1]

  const content = typeof children === 'string' ?
    <Typography variant="button" color={textColor || defaultTextColor}>{children}</Typography> :
    children

  return (
    <MuiButton
      classes={{
        contained: classes.contained,
        text: classes.text,
      }}
      endIcon={loading ? null : endIcon}
      variant={variant}
      disabled={disabled}
      className={cx(classes.button, className)}
      disableElevation
      {...props}
    >
      {loading ? (
        <div style={{ color: theme.palette.common[textColor], display: 'flex' }}>
          <CircularProgress size="1.3rem" color="inherit" />
        </div>
      ) : content}
    </MuiButton>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  endIcon: PropTypes.node,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  className: PropTypes.string,
  disableElevation: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  endIcon: null,
  loading: false,
  variant: 'contained',
  disabled: false,
  className: null,
  disableElevation: true,
}

export default Button
