
const ErrorFallback = () => {
    return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
             role="alert">
            <span className="font-medium">Some error happens while updating this component.</span> Change a few things up and try again.
        </div>
    )
}

export default ErrorFallback;