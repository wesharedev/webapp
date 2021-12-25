export default (theme) => {
  return {
    paper: {
      overflowY: 'visible',
      margin: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(4),
      },
    },

    fullScreenPaper: {
      overflowY: 'auto',
    },

    iconContainer: {
      position: 'absolute',
      width: '120px',
      height: '120px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    closeContainer: {
      position: 'absolute',
      right: 0,
    },

    title: {
      textAlign: 'center',
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },

    titleWithIcon: {
      marginTop: theme.spacing(10.5),
      paddingTop: 0,
      paddingBottom: 0,
    },

    content: {
      padding: theme.spacing(1, 5),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },

    fullScreenContent: {
      paddingBottom: theme.spacing(10.5),
    },

    actions: {
      padding: theme.spacing(1, 5, 5, 5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
    },

    stickyActions: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: theme.palette.common.pureWhite,
      boxShadow: '0px -16px 24px rgba(65, 65, 122, 0.04)',
    },

    subtitle: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  }
}
