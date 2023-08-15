import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    container: {
        backgroundColor: 'white',
        color: '#0E4489',
        padding: '15px 10px 10px 20px'
    },
    button: {
        float: 'right',
        marginRight: '20px',
        padding: '0px 20px',
        background: 'white',
        color: '#0E4489',
        border: '2px solid',
        bordercolor: '#0E4489'
    },

    header: {
        fontWeight: 900,
        marginBottom: '20px'
    },

    basicInfoContainer: {
        display: 'flex',
        paddingLeft: '10px',
        marginBottom: '20px'
    },
    col1: {},

    col2: {
        paddingLeft: '10px'
    },
    formGroup: {
        marginTop: '5px'
    },
    formLabel: {
        fontWeight: '500',
        height: '1rem',
        width: '90px',
        padding: '1px 0'
    },
    textInput: {
        paddingLeft: '5px',
        border: 'none',
        outline: 'none',
        width: '300px'
    },

    textInputEdit: {
        backgroundColor: '#C2CDEA',
        border: 'none',
        outline: 'none',
        fontWeight: '500',
        paddingLeft: '5px',
        width: '300px'
    }
})
