import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',  //Configuração do banco de dados SQLite
    database:'db',
    entities:[],
    synchronize:true,
    autoLoadEntities:true
  }), 
  ProdutoModule, UserModule], //Importa os módulos de "Modulos de 'Produto'"
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
