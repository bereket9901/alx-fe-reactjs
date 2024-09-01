import { useQuery } from "react-query"

const fetchPosts = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!result.ok) {
        throw new Error('Network response was not ok');
    }
    return result.json();
}
export default function PostsComponent() {
    const { data, isError, error, isLoading } = useQuery('fetchData', fetchPosts, {
        staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // Data remains in cache for 10 minutes after becoming stale
        refetchOnWindowFocus: true, // Refetch data when the window is refocused
        keepPreviousData: true,     // Keep previous data while fetching new data
    });
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError.message}</div>;
    return (
        <>
            <h1>Posts Component</h1>
            {data.map(item => (<div key={item.id}>{item.title}</div>))}
            <button onClick={fetchPosts}>Fetch</button>
        </>
    )
}
