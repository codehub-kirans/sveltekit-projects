export const GET = async  ( {params}) => {
    const res = await  fetch(`https://dummyjson.com/posts/${params.postId}`)
    const data = await res.json()
    //console.log(params)

    return new Response(JSON.stringify(data))
}