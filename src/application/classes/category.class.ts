import { Replace } from "../helpers/Replace";

export interface CategoryProps {
    name: string
    description: string
    icon: string
    createdAt: Date
    deletedAt?: Date | null
}

export class Category {

    private props: CategoryProps;
    private _id: number;

    constructor(props: Replace<CategoryProps, { createdAt?: Date }>, id?: number) {
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

    public set description(description: string) {
        this.props.description = description
    }

    public get description(): string {
        return this.props.description
    }
    
    public set icon(icon: string) {
        this.props.icon = icon
    }

    public get icon(): string {
        return this.props.icon
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

