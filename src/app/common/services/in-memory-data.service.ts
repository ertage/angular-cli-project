import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        "name": "Bob Weirt",
        "age": 28,
        "email": "BobWeirt@rshgt.com"
      },
      {
        id: 2,
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
      {
        id: 3,
        "name": "Alice Discco",
        "age": 32,
        "email": "Alice@rshgt.com"
      },
      {
        id: 3,
        "name": "Bob Weirt",
        "age": 28,
        "email": "BobWeirt@rshgt.com"
      },
      {
        id: 4,
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
      {
        id: 5,
        "name": "Alice Discco",
        "age": 32,
        "email": "Alice@rshgt.com"
      },
      {
        id: 6,
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
    ]
    return {users};
  }
}
