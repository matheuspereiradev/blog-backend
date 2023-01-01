import { IsNotEmpty, Length } from "class-validator";

export class UpdateCategoryBody{
    @IsNotEmpty()
    @Length(5,255)
    readonly name: string;
    
    @IsNotEmpty()
    @Length(5,80)
    readonly icon: string;

    @IsNotEmpty()
    @Length(10,1000)
    readonly description: string;
}