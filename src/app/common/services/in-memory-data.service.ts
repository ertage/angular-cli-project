import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        "name": "Bob Weirt",
        "age": 28,
        "email": "BobWeirt@rshgt.com"
      },
      {
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
      {
        "name": "Alice Discco",
        "age": 32,
        "email": "Alice@rshgt.com"
      },
      {
        "name": "Bob Weirt",
        "age": 28,
        "email": "BobWeirt@rshgt.com"
      },
      {
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
      {
        "name": "Alice Discco",
        "age": 32,
        "email": "Alice@rshgt.com"
      },
      {
        "name": "Tom Moloha",
        "age": 45,
        "email": "Moloha@rshgt.com"
      },
    ]
    return {users};
  }
}
