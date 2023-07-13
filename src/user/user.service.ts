import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { entradaSenha } from './validar-usuario.ts';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){} //Puxa o repositorio/database de usuaruios
  
  //Funções chamadas pelo controller para serem usadas com CRUD


  //Cria um usuário se for um administrador  usando o padrão JSON com parâmetro
  create(tipo: string, createUserDto: CreateUserDto) {    
    if(tipo != 'adm'){ //Verifica a permissão
      throw new HttpException('This user is not an administrator',HttpStatus.BAD_REQUEST)  //Usuario não autorizado
    }
    const novoUsuario = this.userRepository.create({...createUserDto}) //Autorizado cria novo usuario
    return this.userRepository.save(novoUsuario); //Salva
  }

  //Mostra todos os usuarios (disponível para todos os usuarios)
  findAll() {
    return this.userRepository.find();  
  }

  //Mostra um usuario específico (disponível para todos os usuarios)
  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  //Atualiza um usuário específico se for um administrador usando o padrão JSON com parâmetro
  update(tipo:string, id: number, updateUserDto: UpdateUserDto) {
    if(tipo!='adm'){  //Verifica a permissão
    throw new HttpException('This user is not an administrator',HttpStatus.BAD_REQUEST)  //Usuario não autorizado
    }
    return this.userRepository.update({id}, {...updateUserDto}); //Autorizado remove
  }

  //Remove um usuário específico se for um administrador com permissão
  remove(id:number, validarUsuario:interface) {
    var senha = validarUsuario
    if(senha != "senha")
      throw new HttpException('This user is not an administrator',HttpStatus.BAD_REQUEST)  //Usuario não autorizado
    
    return this.userRepository.delete({id}); //Autorizado deleta
  }
}
