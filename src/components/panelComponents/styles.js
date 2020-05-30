export default theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    paperCard: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
    },
    iconComponent: {
        padding: 5,
        '&:hover': {
            cursor: 'all-scroll',
        }
    }
})