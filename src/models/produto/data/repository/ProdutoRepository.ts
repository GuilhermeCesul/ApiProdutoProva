import { Produto } from "@prisma/client";
import { ProdutoCriacaoDto, ProdutoUpdateDto } from "../entity/Produto";
import prisma from "../../../../config/database";



export interface ProdutoRepositoryInterface {
    //nome(parametro:tipoParametro):retorno
    salvarProduto(produto: ProdutoCriacaoDto): Promise<Produto>
}
export class ProdutoRepository implements ProdutoRepositoryInterface {

    async salvarProduto(produto: ProdutoCriacaoDto): Promise<Produto> {
  
        try {
    
            const prod = await prisma.produto.create({data:produto})
            return prod
        } catch (error) {
            throw new Error("Problema ao criar produto")
        }

    }

    async buscarProdutoPorCodigo(codigo: number): Promise<Produto | null> {

        try {
            return await prisma.produto.findUnique({where:{codigo}})
        } catch (error) {
            throw new Error("Erro ao localizar o produto")   
        }

    }

    async buscarProdutoPorMarca(marca: string): Promise<Produto[] | null> {

        try {
            return await prisma.produto.findMany({where:{marca}})
        } catch (error) {
            throw new Error("Erro ao localizar o produto")   
        }

    }

    async alterarProduto(codigo: number, produto: ProdutoUpdateDto): Promise<Produto> {

        try {
            return await prisma.produto.update({where:{codigo}, data: produto})
        } catch (error) {
            throw new Error("Erro ao alterar o produto")
        }

    }

    async deletarProduto(codigo: number): Promise<void> {
        try {
            await prisma.produto.delete({where:{codigo}})
        } catch (error) {
            throw new Error("Problema ao deletar")   
        }
    }

}