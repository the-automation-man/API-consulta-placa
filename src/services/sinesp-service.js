const { search } = require('sinesp-api');

const getVehicle = async (plate) => {
    try {
        // Fazendo a chamada para a API Sinesp
        const response = await search(plate);

        // Verifica se a resposta da API é válida
        if (!response || typeof response !== 'object') {
            throw new Error('Resposta da API não é válida');
        }

        return response; // Retorna os dados válidos

    } catch (error) {
        // Tratando erro da API e retornando uma mensagem adequada
        console.error('Erro ao buscar dados da placa:', error);
        throw error; // Repassa o erro para o controller
    }
};

module.exports = {
    getVehicle
};
