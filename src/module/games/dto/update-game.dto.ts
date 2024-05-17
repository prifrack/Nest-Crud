import { IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateGameDto  {
    
    @IsNotEmpty()
    @IsBoolean()
    goodGame: boolean

}
