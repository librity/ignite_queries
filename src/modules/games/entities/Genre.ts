import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Game } from './Game'

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @ManyToMany(() => Game, game => game.genre)
  games: Game[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
