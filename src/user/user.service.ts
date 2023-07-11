import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){} //Puxa o repositorio/database de usuaruios
  
  //Funções chamadas pelo controller para serem usadas com CRUD

  create(createUserDto: CreateUserDto) {    //Cria um produto usando o padrão JSON com parâmetro
    const novoUsuario = this.userRepository.create({...createUserDto}) 
    this.userRepository.save(novoUsuario);
  }

  //Mostra todos os usuarios
  findAll() {
    return this.userRepository.find();  
  }

  //Mostra um usuario específico
  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  //Atualiza um usuário específico
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id}, {...updateUserDto});
  }

  //Remove um usuário específico
  remove(id: number) {
    return this.userRepository.delete({id});
  }
}
