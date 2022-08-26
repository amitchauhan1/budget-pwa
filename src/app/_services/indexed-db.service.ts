import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

@Injectable({
    providedIn: 'root',
})
export class IndexedDBService {
    public db;
    constructor() {
        this.connectToDb();
    }

    async connectToDb() {
        this.db = await openDB<MyDB>('budget', 1, {
            upgrade(db) {
                db.createObjectStore('user-store1');
                db.createObjectStore('user-store2');
            },
        });  
    }
    async insert(name) {
        await openDB<MyDB>('budget', 1, {});
        return this.db.put('user-store1', name, 'name76sdf78');    
    }
    async insert1(name) {
        await openDB<MyDB>('budget', 1, {});
        return this.db.put('user-store2', name.email, 'name7asd8');    
    }
    async delete(key) {
      await openDB<MyDB>('budget', 1, {});
      return this.db.delete('user-store1', key); 
    }
    async get(key) {
      await openDB<MyDB>('budget', 1, {});
      var get = this.db.get('user-store1', key);
      return get;
    }
    async clear() {
      await openDB<MyDB>('budget', 1, {});
      var clear = this.db.clear('user-store1');
      return clear;
    }
    async keys() {
      await openDB<MyDB>('budget', 1, {});
      var getAllKeys = this.db.getAllKeys('user-store1');
      return getAllKeys;

    }

}

interface MyDB extends DBSchema {
    'user-store1': {
        key: string;
        value: string;
    };
    'user-store2': {
        key: string;
        value: string;
    };
}

