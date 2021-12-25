export default (theme) => {
  return {
    commissionInfo: {
      textAlign: 'center',
      paddingBottom: 16,
      borderBottom: `1px solid ${theme.palette.common.base3}`,
    },
    logoContainer: {
      textAlign: 'center',
      paddingLeft: 8,
      paddingRight: 8,
    },
    logo: {
      maxHeight: 70,
      maxWidth: '100%',
    },
  }
}
