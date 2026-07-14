const IIKO_URL = "https://api-ru.iiko.services";

let token: string | null = null;
let tokenExpires = 0;

interface TokenResponse {
    correlationId: string;
    token: string;
}


export async function getToken() {
    if (token && Date.now() < tokenExpires) {
        return token
    }
    const response = await fetch(
        `${IIKO_URL}/api/1/access_token`,
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                apiLogin:Bun.env.API_LOGIN
            })
        }
    )
    if (!response.ok){
        const error = await response.text();

        throw new Error(error);
    };
    const data: TokenResponse = await response.json();

    token = data.token;

    tokenExpires = Date.now() + 50 * 60 * 1000;

    return token;
}