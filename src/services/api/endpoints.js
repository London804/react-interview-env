const getCards = () => {
    return fetch('https://deck-indol.vercel.app/api?type=card')
        .then(response => response.json())
        .catch(handleError)

};

function handleError(error) {
    if (error.data) {
        return error.data;
    }
    return console.log(error);
}

export const apiEndpoints = {
    getCards
};