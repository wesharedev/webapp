export default (theme) => {
  return {
    footerContainer: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'white',
    },
    footer : {
      marginLeft: 'auto',
      marginRight: 'auto',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingTop: 40,
      paddingBottom: 40,
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
    },
    aboutContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    aboutResponsiveContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      justifyContent: 'center',
    },
    logo: {
      height: '40px',
      objectFit: 'contain',
      alignSelf: 'flex-start',
    },
    socialLogo: {
      height: 'fit-content',
      width: 'fit-content',
      alignItems: 'flex-start',
    },
    socialLogoContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    about: {
      marginTop: 16,
      marginBottom: 16,
    },
    ml26: {
      marginLeft: 26,
    },
    mb16: {
      marginBottom: 16,
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'center',
      width: '100%',
      marginBottom: 40,
      marginTop: 40,
    },
    testVersion: {
      color: theme.palette.common.base5,
    },
    link: {
      textDecoration: 'none',
    },
  }
}
