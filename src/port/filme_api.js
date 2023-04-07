const Filme = require('../application/filme_service');
const Utils = require('../utils/utils');

const route = '/filme';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Filme.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Filme.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Filme.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Filme.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};
