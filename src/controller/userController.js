const uniqid = require('uniqid');
const connections = require('../database/connections');

module.exports = {

    async list(req, res){
        const users = await connections('users').select('*');
        return res.json(users);
    },

    async show(req, res){
        const {id} = req.params;
        const users = await connections('users')
            .where('id', id)
            .select('*');
        return res.json(users);
    },

    async create(req, res){
        const {name, email, idade, empresa} = req.body;
        const id = uniqid();
        await connections('users').insert({
            id,
            name,
            email,
            idade,
            empresa
        });
        res.json({id});
    },

    async update(req, res){
        const {id} = req.params;
        const {name, email, idade, empresa} = req.body;
        await connections('users')
            .where('id', id)
            .update({
                id,
                name,
                email,
                idade,
                empresa
            });

        return res.status(204).send();
    },

    async delete(req, res){
        const {id} = req.params;
        await connections('users')
            .where('id', id)
            .delete();

        return res.status(204).send();
    }
}