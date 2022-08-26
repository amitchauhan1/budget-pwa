import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

@Injectable({
    providedIn: 'root',
})
export class ParameterValueDBService {
    public db;
    constructor() {
        this.connectToDb();
    }
    async connectToDb() {
        this.db = await openDB<MyDB>('budget', 1, {
            upgrade(db) {
                db.createObjectStore('parameterType');
            },
        });  
    }
    async insert(name) {
        await openDB<MyDB>('budget', 1, {});
        return this.db.put('parameterType', name, 'name76sdf78');    
    }
    async delete(key) {
      await openDB<MyDB>('budget', 1, {});
      return this.db.delete('parameterType', key); 
    }
    async get(key) {
      await openDB<MyDB>('budget', 1, {});
      var get = this.db.get('parameterType', key); 
      console.log(get);
      return get;
    }
    async clear() {
      await openDB<MyDB>('budget', 1, {});
      var clear = this.db.clear('parameterType'); 
      console.log(clear);
      return clear;
    }
    async keys() {
      await openDB<MyDB>('budget', 1, {});
      var getAllKeys = this.db.getAllKeys('parameterType'); 
      console.log(getAllKeys);
      return getAllKeys;

    }

}

interface MyDB extends DBSchema {
    'parameterType': {
        key: string;
        value: string;
    };
}

