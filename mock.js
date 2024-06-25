async function get(title){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const posts = data.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));

        
        if (posts.length === 0) {
            console.log('maganam ');
        } else {
            console.log(posts);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

const title = 'maganam';
get(title);
