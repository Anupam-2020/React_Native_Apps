export const usePostMovieList = async (movieDetails, username) => {
    try {
        const response = await fetch('http://localhost:3000/updateList',{
            method: 'POST',
            body: JSON.stringify({
                movieDetails, 
                username
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        console.log(err)
    }
}