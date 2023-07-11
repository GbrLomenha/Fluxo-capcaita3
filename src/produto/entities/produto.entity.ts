import { Entity,PrimaryGeneratedColumn,Column} from "typeorm"

@Entity({name:'produto'})//Este decorador informa que é uma entidade (Decorador é uma função pronta)

export class Produto { //Classe da entidade Produto
    //Colunas da tabela de Produtos

    @PrimaryGeneratedColumn()
    id:number //Id do tipo

    @Column()
    tipo:string

    @Column()
    preço:number

    @Column()
    tamanho:string

    @Column()
    quantidade:number

}
