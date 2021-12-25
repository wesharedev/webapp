export default (theme) => {
  return {
    headerContainer: {
      height: '72px',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'white',
    },
    header: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '72px',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
      [theme.breakpoints.down('sm')]: {
        height: '64px',
      },
    },

    aboutContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      height: '40px',
    },

    about: {
      marginLeft: 48,
      '&:hover': {
        color: theme.palette.common.brandBlue0,
      },
    },

    link: {
      textDecoration: 'none',
    },
  }
}
