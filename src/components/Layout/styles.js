export default (theme) => {
  return {
    mainContainer: {
      backgroundColor: theme.palette.common.pureWhite,
    },
    content: {
      marginTop: 40,
      marginBottom: 40,
      width: 'fit-content',
      maxWidth: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
    },

    whiteBackground: {
      backgroundColor: theme.palette.common.pureWhite,
    },

    widthLimit: {
      maxWidth: theme.global.maxContentWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    bodyContainer: {
      backgroundColor: theme.palette.common.base1,
    },

    body: {
      minHeight: '60vh',
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
    },
  }
}
