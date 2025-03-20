exports.handler = async (event) => {
    const name = event.queryStringParameters.name;
    const today = new Date();
    const time = today.getHours()+1 + ":" + today.getMinutes();
    
    return {
        statusCode: 200,
        body: "Hello World ! Ici " + name + ", à " + time,
    };
};