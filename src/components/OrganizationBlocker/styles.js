const styles = (theme) => {
  const {
    base3,
    brandYellow,
  } = theme.palette.common

  return {
    itemContainer: {
      marginBottom: theme.spacing(2),
      border: `2px solid ${base3}`,
      borderRadius: '8px',
      padding: theme.spacing(2, 3),
      cursor: 'pointer',
      transition: 'border 0.2s ease-in-out',
    },

    selected: {
      borderColor: brandYellow,
    },

    description: {
      marginTop: theme.spacing(1),
    },
  }
}

export default styles
