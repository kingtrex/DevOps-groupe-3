exports.handler = async (event) => {
    const parisTime = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
    return {
        statusCode: 200,
        body: JSON.stringify({ event }),
    };
};