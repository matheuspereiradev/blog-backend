import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class UpdatePostBody{
    @IsNotEmpty()
    @Length(3,200)
    readonly title: string;

    @IsNotEmpty()
    @Length(3,200)
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    readonly idCategory: number;
    
    @IsNotEmpty()
    readonly content: string;

    @IsNotEmpty()
    readonly thumbnail: string;
}