export const useGetDatabase = async() => {
    try {
        const response = await fetch('http://localhost:3000/')
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}