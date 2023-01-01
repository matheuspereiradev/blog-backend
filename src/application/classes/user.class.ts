import { Replace } from "../helpers/Replace";

export interface UserProps {
    name: string
    surname: string
    password: string
    email: string
    bio: string
    createdAt: Date
    deletedAt?: Date | null
}

export class User {

    private props: UserProps;
    private _id: number;

    constructor(props: Replace<UserProps, { createdAt?: Date }>, id?: number) {
        this._id = id;
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date()
        }
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get name(): string {
        return this.props.name
    }

    public set surname(surname: string) {
        this.props.surname = surname
    }

    public get surname(): string {
        return this.props.surname
    }
    
    public set password(password: string) {
        this.props.password = password
    }

    public get password(): string {
        return this.props.password
    }
    
    public set email(email: string) {
        this.props.email = email
    }

    public get email(): string {
        return this.props.email
    }

    public set bio(bio: string) {
        this.props.bio = bio
    }

    public get bio(): string {
        return this.props.bio
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }

    public get deletedAt(): Date | null | undefined {
        return this.props.deletedAt
    }

    public get id(): number {
        return this._id
    }

    public delete() {
        this.props.deletedAt = new Date()
    }
}

