import { createHash } from 'crypto';
import { HashProvider } from '../../../application/providers/hash.provider';

export default class Md5Provider implements HashProvider {

    public async genarateHash(seed: string): Promise<string> {
        if (seed !== '')
            return createHash('md5').update(seed).digest('hex');
    }

    public async compareHash(text: string, hashedString: string): Promise<boolean> {
        const ex = createHash('md5').update(text).digest('hex');
        return ex === hashedString;
    }
}
