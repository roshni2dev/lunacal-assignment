import { Alert, Snackbar } from "@mui/material"

const ErrorMessage = ({ open,setOpen }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Please select valid file
            </Alert>
        </Snackbar>
    )
}
export default ErrorMessage