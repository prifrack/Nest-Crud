import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateGameDto {
    
    @IsNotEmpty()
    @IsString()
    nameGame: string
    
    @IsNotEmpty()
    @IsString()
    description: string
    
    @IsNotEmpty()
    @IsBoolean()
    goodGame: boolean

}
