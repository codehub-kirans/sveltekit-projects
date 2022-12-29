export const load = ({ fetch }) => {
    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts')
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`)
            }
            const data = await res.json()
            return data.posts
        }
        catch (error) {
            console.log(`Could not fetch posts: ${error}`)
        }        
    }
    return {
        posts: fetchPosts()
    }
}