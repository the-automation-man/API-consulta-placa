const notFoundError = (req, res, next) => {
    if (!res.headersSent) {
        res.status(404).json({ error: "Rota não encontrada" });
    } else {
        next();
    }
};

const internalServerError = (error, req, res, next) => {
    console.error("Erro interno:", error);
    
    if (!res.headersSent) {
        res.status(error.status || 500).json({
            error: error.name || "InternalServerError",
            message: error.message || "Ocorreu um erro no servidor",
            stack: process.env.NODE_ENV === "production" ? undefined : error.stack
        });
    }

    next();
};

module.exports = {
    notFoundError,
    internalServerError
};
