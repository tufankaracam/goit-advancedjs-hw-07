class Key {
    private signature: number = Math.random();
  
    public getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    constructor(private key: Key) {}
  
    public getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];
  
    constructor(protected key: Key) {}
  
    abstract openDoor(key: Key): void;
  
    comeIn(tenant: Person): void {
      if (this.door) {
        this.tenants.push(tenant);
      }
    }
  }
  
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    public openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
      } else {
        this.door = false;
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);
  
  export {};