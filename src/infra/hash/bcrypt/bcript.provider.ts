import { compare, hashSync } from 'bcrypt';
import { HashProvider } from '../../../application/providers/hash.provider';

export default class BCryptHashProvider implements HashProvider {

    public async genarateHash(seed: string): Promise<string> {
        if (seed !== '')
            return hashSync(seed, 9);
    }

    public async compareHash(text: string, hashedString: string): Promise<boolean> {
        return compare(text, hashedString);
    }
}
