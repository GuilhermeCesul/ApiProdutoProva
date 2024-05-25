import { ProdutoRepository } from "../../data/repository/ProdutoRepository";

export class DeletarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(codigo: number) {
        try {

            return await this.produtoRepository.deletarProduto(codigo)

        } catch (error) {
            throw new Error("Problema ao alterar Produto")
        }
    }

}