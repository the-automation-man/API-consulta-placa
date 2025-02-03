const sinespService = require('../services/sinesp-service');

const get = async (req, res, next) => {
    try {
        const { plate } = req.params;

        // Verifica se a placa está no formato correto
        if (!plate) {
            return res.status(400).json({ error: "Placa inválida." });
        }

        // Obtém o veículo da API
        const vehicle = await sinespService.getVehicle(plate);

        // Verifica se a resposta da API é válida
        if (!vehicle || typeof vehicle !== 'object') {
            return res.status(404).json({ error: 'Veículo não encontrado ou dados inválidos' });
        }

        // Caso seja um objeto válido, retorna os dados do veículo
        return res.status(200).json(vehicle);
        
    } catch (error) {
        // Captura qualquer erro de forma geral e encaminha para o middleware de erro
        next(error);
    }
};

module.exports = {
    get
};
