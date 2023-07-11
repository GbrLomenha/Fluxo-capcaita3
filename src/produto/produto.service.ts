import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//Teste de git

@Injectable()
export class ProdutoService {
  constructor(@InjectRepository(Produto) private produtoRepository:Repository<Produto>){} //Puxa o repositorio/database de produto
  
  //Funções chamadas pelo controller para serem usadas com CRUD

  create(createProdutoDto: CreateProdutoDto) {   //Cria um produto usando o padrão JSON com parâmetro
    const novoProduto = this.produtoRepository.create({...createProdutoDto});
      this.produtoRepository.save(novoProduto);
  }

  //Mostra todos os produtos
  findAll() {
    return this.produtoRepository.find();                     
  }

  //Mostra um produto específico
  findOne(id: number) {
    return this.produtoRepository.findOneBy({id});            
  }

  //Atualiza um produto específico
  update(id: number, updateProdutoDto: UpdateProdutoDto,) {   
    return this.produtoRepository.update({id}, {...updateProdutoDto});
  }

  //Deleta um produto específico
  remove(id: number) {                                        
    return this.produtoRepository.delete({id});
  }
}
