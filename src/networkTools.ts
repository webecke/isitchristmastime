export const BASE_URL = generateBaseUrl()

function generateBaseUrl() {
    let baseUrl = window.location.origin
    if (baseUrl.startsWith("http://localhost")) {
        baseUrl = "http://localhost:8788"
    }
    return baseUrl
}

export const doStandardGet = async (endpoint: string) => {
    const response = await fetch(BASE_URL + endpoint, {
        method: 'GET',
        credentials: 'include'
    });

    if (!response.ok) {
        console.error(response);
        return "something didn't work while getting endpoint " + endpoint;
    }

    return await response.json();
};