export default (theme) => {
  const {
    pureWhite,
  } = theme.palette.common

  return {
    background: {
      backgroundColor: theme.palette.common.base1,
      width: '100vw',
      height: '100vh',
    },

    mainContainer: {
      maxWidth: theme.global.maxContentWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '80%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('sm')]: {
        width: '85%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },

    logoContainer: {
      padding: theme.spacing(1.2),
      backgroundColor: pureWhite,
      borderRadius: 24,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },

    logo: {
      maxWidth: 145,
      maxHeight: 75,
    },

    progressContainer: {
      width: theme.spacing(30),
    },

    alignCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },

    tipImage: {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    adBlockContainer: {
      textAlign: 'center',
    },

    adBlockImage: {
      width: '80%',
      maxWidth: 790,
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },

    adBlockMessage: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  }
}
