export const load = ( {params, fetch} ) => {
    const fetchPost = async (id) => {
        try {
            const res = await fetch(`/api/posts/${id}`)
            const data = await res.json()
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
    return {post: fetchPost(params.postId)}
}