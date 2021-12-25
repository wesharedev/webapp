import React from 'react'

import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'

const StyledMenu = withStyles()((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

export default function DropdownMenu({ children, title, open, setOpen }) {
  const anchorRef = React.useRef(null)

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  
  return (
    <div>
      <div
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {title}
      </div>
    
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorRef.current}
        keepMounted
        open={open}
        onKeyDown={handleListKeyDown}
        onClose={handleToggle}
      >
        {children}
      </StyledMenu>
    </div>
  )
}