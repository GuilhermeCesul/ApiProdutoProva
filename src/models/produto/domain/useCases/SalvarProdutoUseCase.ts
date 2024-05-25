import { ProdutoCriacaoDto } from "../../data/entity/Produto";
import { ProdutoRepository } from "../../data/repository/ProdutoRepository";

export class SalvarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(produto: ProdutoCriacaoDto) {
        try {
            produto.preco = produto.preco + 5;
            return await this.produtoRepository.salvarProduto(produto);
        } catch (error) {
            throw new Error("Problema ao criar o produto")
        }

    }

}