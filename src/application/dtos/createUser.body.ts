import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserBody{
    @IsNotEmpty()
    @Length(3,50)
    readonly name: string;

    @IsNotEmpty()
    @Length(3,50)
    readonly surname: string;
    
    @IsNotEmpty()
    @Length(8,80)
    readonly password: string;

    @IsNotEmpty()
    @Length(8,80)
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @Length(10,1000)
    readonly bio: string;
}