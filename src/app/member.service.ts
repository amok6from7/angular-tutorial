import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Member } from './member';

@Injectable()
export class MemberService {
  getMembers(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }

  getMember(id: number): Promise<Member> {
    return this.getMembers()
      .then(members => members.find(member => member.id === id));
  }
}
