import { Replace } from "../helpers/Replace";
import { Category } from "./category.class";
import { User } from "./user.class";

export interface PostProps {
    title: string
    description: string
    content: string
    thumbnail: string
    author: User
    category: Category
    createdAt: Date
    deletedAt?: Date | null
}

export class Post {

    private props: PostProps;
    private _id: number;

    constructor(props: Replace<PostProps, { createdAt?: Date }>, id?: number) {
        this._id = id;
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date()
        }
    }

    public set title(title: string) {
        this.props.title = title
    }

    public get title(): string {
        return this.props.title
    }
    
    public set description(description: string) {
        this.props.description = description
    }

    public get description(): string {
        return this.props.description
    }

    public set content(content: string) {
        this.props.content = content
    }

    public get content(): string {
        return this.props.content
    }

    public set thumbnail(thumbnail: string) {
        this.props.thumbnail = thumbnail
    }

    public get thumbnail(): string {
        return this.props.thumbnail
    }

    public set author(author: User) {
        this.props.author = author
    }

    public get author(): User {
        return this.props.author
    }

    public set category(category: Category) {
        this.props.category = category
    }

    public get category(): Category {
        return this.props.category
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

