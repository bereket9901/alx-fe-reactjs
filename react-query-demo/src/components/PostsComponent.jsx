import { useQuery } from "react-query"

const fetchPosts = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    return result.json();
}
export default function PostsComponent() {
    const { data, isError ,error, isLoading } = useQuery('fetchData', fetchPosts);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError.message}</div>;
    return (
        <>
            <h1>Posts Component</h1>
            {data.map(item => (<div key={item.id}>{item.title}</div>))}
        </>
    )
}
