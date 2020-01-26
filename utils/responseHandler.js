module.exports = {
    successResponse: (res, data) => {
        res.status(200).json({
            success: true,
            data
        })
    },
    errorResponse: (res, error) => {
        res.status(400).json({
            success: false,
            error
        })
    }
}