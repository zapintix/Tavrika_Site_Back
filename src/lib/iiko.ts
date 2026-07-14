import {getToken} from "../services/auth.service"

const BASE_URL = "https://api-ru.iiko.services";


export async function iikoFetch(
    endpoint: string,
    body: unknown
) {

    const token = await getToken();
    const response = await fetch(
        BASE_URL+endpoint,
        {
            method: 'POST',
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }
    );

    if (!response.ok) {
            const error = await response.text();

            throw new Error(error);
        }


        return response.json();
}