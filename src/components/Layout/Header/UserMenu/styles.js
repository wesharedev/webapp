export default (theme) => {
  return {
    defaultAvatar: {
      marginRight: 8,
      color: theme.palette.common.primary,
    },
    hamburger: {
      color: theme.palette.common.primary,
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 8,
    },
    userMenuContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    userName:{
      color: theme.palette.common.brandBlue0,
      marginLeft: 8,
    },
    expendMore: {
      color: theme.palette.common.brandBlue0,
      marginLeft: 14,
    },
    menuItemContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
    },
    menuItemTitle: {
      marginLeft: 12,
    },
    iconContainer: {
      padding: 8,
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.base2,
      borderRadius: 8,
      width: 24,
      height: 24,
    },
    noPadding: {
      padding: 0,
    },
  }
}
