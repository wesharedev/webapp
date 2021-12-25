export default () => {
  return {
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 'min-content',
      borderRadius: 8,
      overflow: 'hidden',
    },
    banner: {
      width: '100%',
      height: '100%',
    },
    leftItem: {
      flex: 2,
      height: '100%',
      width: '60vh',
    },
    rightItem: {
      flex: 1,
      width: '30vh',
    },
  }
}
