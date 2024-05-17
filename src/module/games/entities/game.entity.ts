import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity( { name: 'Games_alex' } )
export class Game {

    @PrimaryGeneratedColumn()
    id: number 

    @Column({ name: 'name_game' })
    nameGame: string
    
    @Column()
    description: string
    
    @Column( { name: 'good_game' } )
    goodGame: boolean

}
