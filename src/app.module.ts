import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/admin/users/users.module';
import { User } from './modules/admin/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Union2017',
      database: 'backend_nest_inventarios',
      entities: [
        User
        // __dirname + '/../**/*.entity{.ts,.js}'
      ],
      synchronize: false
    }),
    UsersModule,
    //UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
