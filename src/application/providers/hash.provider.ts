export abstract class HashProvider {
    abstract genarateHash(seed:string):Promise<string>;
    abstract compareHash(text: string, hashedString: string):Promise<boolean>;
}