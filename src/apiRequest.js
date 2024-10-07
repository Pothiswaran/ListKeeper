const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error("Failed to complete the request");
    } catch (err) {
        errMsg = err.message;  // Fix: Use `err.message` not `err.Message`
    } finally {
        return errMsg;
    }
}
export default apiRequest;

