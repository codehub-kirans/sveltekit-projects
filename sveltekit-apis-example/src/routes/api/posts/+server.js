import { SECRET_API_KEY } from "$env/static/private"

export const GET =  async ({ request, url }) => {
    /*
    const authHeader = request.headers.get('Authorization')

    if (authHeader !== 'Myauthheader') {
        return new Response(JSON.stringify({message: "Invalid Credentials"}), {status: 401})
    }
    */
    const limit = Number(url.searchParams.get('limit') ?? '10')
    const skip = Number(url.searchParams.get('skip') ?? '0')

    const data = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`)
        }
        return res.json()
    })
    .catch((err) => {
        console.log(`Could not fetch posts: ${err}`)
    })

    return new Response(JSON.stringify(data), {status: 200})
}

export const POST = async ({ request }) => {
    /*
    const authHeader = request.headers.get('Authorization')
    if (authHeader !== 'Myauthheader') {
        return new Response(JSON.stringify({message: "Invalid Credentials"}), {status: 401})
    }*/

    const body = await request.json()
    console.log(body)

    return new Response(JSON.stringify({message: "Success"}), {status: 201})
} 