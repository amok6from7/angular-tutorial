import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Member } from './member';

@Injectable()
export class MemberService {
  getMembers(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }
}
