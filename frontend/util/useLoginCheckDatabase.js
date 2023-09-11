export const useLoginCheckDatabase = async(username, password) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}