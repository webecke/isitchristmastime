export const BASE_URL = generateBaseUrl()

function generateBaseUrl() {
    let baseUrl = window.location.origin
    if (baseUrl.startsWith("http://localhost")) {
        baseUrl = "http://localhost:8788"
    }
    return baseUrl
}