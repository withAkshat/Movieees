export const handleError = (err, req, res, next) => {

    const statusCode = err.status || 500

    const errorObj = {
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    }

    res.status(statusCode).json(errorObj)
}