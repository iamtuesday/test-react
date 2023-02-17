
import { useEffect } from 'react';

export const Fetch = async () => {

    useEffect(() => {
        const fetchUser = async () => {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then(response => console.log(response))

        }
        fetchUser();
    }, [])
    return (
        <div>NetWork</div>
    )
}
