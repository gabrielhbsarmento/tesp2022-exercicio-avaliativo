import { Request, Response } from 'express';
import { produto } from '../models/produto';
import * as Yup from 'yup';

const produtoSchema = Yup.object().shape({
    nome: Yup.string().required(),
    descricao: Yup.string().required(),
    quantidadeEstoque: Yup.string().required(),
    preco: Yup.string().required(),
    precoPromocional: Yup.string().required(),
    precoPromoAtivado: Yup.string().required(),
    tipo: Yup.string().required(),
    

});
const deleteprodutoSchema = Yup.object().shape({
    descricao: Yup.string().email().required(),
});

export default {
    async create(request: Request, response: Response) {
        const { nome, descricao, quantidadedeEstoque, preco, precoPromocional,precoPromoAtivado, tipo, } = request.body;

        if (
            !(await produtoSchema.isValid({
                nome,
                descricao,
                quantidadedeEstoque,
                preco,
                precoPromocional,
                precoPromoAtivado,
                tipo,
            }))
        ) {
            return response
                .status(401)
                .json({ message: 'dados fornecidos incorretamente' });
        }

        const existing = await produto.findOne({ descricao });
        if (!existing) {
            const user = await produto.create({
                nome,
                descricao,
                quantidadedeEstoque,
                preco,
                precoPromocional,
                precoPromoAtivado,
                tipo,
            });
            return response.status(200).json({
                message: 'Usuario criado com sucesso',
                produto,
            });
        }
        return response
            .status(201)
            .json({ message: 'Usuario ja existe no BD' });
    },
    async index(request: Request, response: Response) {
        // atribui à existing
        // o retorno da chamada do método find
        // no modelo User
        const existing = await produto.find();
        if (!existing) {
            return response
                .status(401)
                .json({ message: 'Nenhum usuario encontrado' });
        }
        return response.status(200).json(existing);
    },
    async update(request: Request, response: Response) {
        const { nome, descricao, quantidadedeEstoque, } = request.body;

        const user = await produto.findOneAndUpdate(
            {
                nome,
            },
            {
                descricao,
                quantidadedeEstoque,
            }
        );
        if (produto) {
            return response.status(200).json({ message: 'Usuario atualizado' });
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
    async findOne(request: Request, response: Response) {
        const {nome, descricao, quantidadedeEstoque } = request.body;
        const user = await produto.find({
            $or: [{ nome: nome }, {descricao: descricao }, { quantidadedeEstoque: quantidadedeEstoque }],
        });
        if (produto) {
            return response.status(200).json(produto);
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
    async delete(request: Request, response: Response) {
        const { descricao } = request.body;

        if (!(await deleteprodutoSchema.isValid({ descricao}))) {
            return response.status(401).json({ message: 'email invalido' });
        }
        const result = await produto.findOneAndDelete({ descricao });
        if (result) {
            return response
                .status(200)
                .json({ message: 'usuario removido com sucesso' });
        }
        return response.status(400).json({ message: 'usuario nao encontrado' });
    },
};
