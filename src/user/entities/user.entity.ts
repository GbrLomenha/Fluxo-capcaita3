import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})//Este decorador informa que é uma entidade (Decorador é uma função pronta)

export class User {     //Classe da entidade User
    //Colunas da tabela de Usuarios
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    password:string

    @Column()
    type:string

}
