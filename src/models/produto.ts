import mongoose, { Schema } from 'mongoose';
export interface ProdutoInteface {
    nome: string,
    descricao: string,
    quantidadeEstoque: number,
    preco: number,
    precoPromocional:number,
    precoPromoAtivado: boolean,
    tipo:string
    
}
const produtoSchema= new Schema(
    {
        nome: String,
        descricao: String,
        quantidadedeEstoque: Number,
        preco: Number,
        precoPromocional: Number,
        precoPromoAtivado: Boolean,
        tipo: String,
       
            
        
    },
    {
        timestamps: true,
    }
);
export const produto = mongoose.model('User', produtoSchema, 'users');
{
}
