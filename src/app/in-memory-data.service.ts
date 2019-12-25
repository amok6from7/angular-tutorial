import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const members = [
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
    ];
    return { members };
  }
}
