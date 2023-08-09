export const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data; // return an array of object
    } catch (error) {
        //console.error('An error occoured', error);
        return error;
        //return [];
    }
}