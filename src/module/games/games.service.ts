import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {

  constructor( @InjectRepository(Game) private readonly gameRepository: Repository<Game> ) {}

  async create(createGameDto: CreateGameDto) {
    const game = this.gameRepository.create(createGameDto);
    return await this.gameRepository.save(game);
  }

  async findAll() {
    return await this.gameRepository.find();
  }

  async findOne(id: number) {
    const game = await this.gameRepository.findOneBy( {id} )

    if (!game) throw new NotFoundException(`Game with id ${id} not found`)

    return game
    
  }
  
  async update(id: number, { goodGame }: UpdateGameDto) {
    const game = await this.gameRepository.preload({
      id,
      goodGame,
    })

    if (!game) throw new NotFoundException(`Game with id ${id} not found`)

    return await this.gameRepository.save(game)

  }
  
  async remove(id: number) {
    const game = await this.gameRepository.findOneBy( {id} )
  
    if (!game) throw new NotFoundException(`Game with id ${id} not found`)
  
    return await this.gameRepository.remove(game)
    
  }
}
