import { Component } from '@angular/core';
import { Member } from './member';

const MEMBERS: Member[] = [
  {id: 11, name: 'サンプル 11'},
  {id: 12, name: 'サンプル 12'},
  {id: 13, name: 'サンプル 13'},
  {id: 14, name: 'サンプル 14'},
  {id: 15, name: 'サンプル 15'},
  {id: 16, name: 'サンプル 16'},
  {id: 17, name: 'サンプル 17'},
  {id: 18, name: 'サンプル 18'},
  {id: 19, name: 'サンプル 19'},
  {id: 20, name: 'サンプル 20'}
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>社員一覧</h2>
    <ul class="members">
      <li *ngFor="let member of members" (click)="onSelect(member)" [class.selected]="member === selectedMember">
        <span class="badge">{{member.id}}</span> {{member.name}}
      </li>
    </ul>
    <member-detail [member]="selectedMember"></member-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .members {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .members li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .members li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .members li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .members .text {
      position: relative;
      top: -3px;
    }
    .members .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = '自社社員名簿';
  members: Member[] = MEMBERS;
  selectedMember: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
