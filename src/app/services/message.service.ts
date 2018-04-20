import { Injectable, Input } from '@angular/core';

import { User } from '../shared/user';

@Injectable()
export class MessageService{
 
    private users: User[];
    private len: number;

    
    public setUser(users: User[]): void {
        
        this.users = users;
        this.len = users.length;
    }
    
    public getUsers(): User[] {
        return this.users;
    }

    public getUser(i : number) : User {
        return this.users[i];
    }

    public getLen(): number {
        return this.len;
    }

    public testService(): string {
        return "Messaggio di TEST da MessageService"
    }
}