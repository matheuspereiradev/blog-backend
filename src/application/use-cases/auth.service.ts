import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../classes/user.class';
import { HashProvider } from '../providers/hash.provider';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private hashProvider: HashProvider,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findByEmail(email);
        const passwordCheck = await this.hashProvider.compareHash(password, user.password)
        if (user && passwordCheck)
            return user;
        return null;
    }

    async login(user: User) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}