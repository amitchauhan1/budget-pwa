import { Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({providedIn:"root"})

export class EnDeService{
    key = 'q3ie43rg67bv9bj3as0';  
    encryptMethod = 'AES-256-CBC';
    encryptMethodLength() { 
        var aesNumber =  this.encryptMethod.match(/\d+/)[0];
        return parseInt(aesNumber);
    }
    encrypt(string) {
        var key =this.key;
        var iv = CryptoJS.lib.WordArray.random(16);
        var salt = CryptoJS.lib.WordArray.random(256);
        var iterations = 999;
        var encryptMethodLength = (this.encryptMethodLength()/4);
        var hashKey = CryptoJS.PBKDF2(key, salt, {'hasher': CryptoJS.algo.SHA512, 'keySize': (encryptMethodLength/8), 'iterations': iterations});
        var encrypted = CryptoJS.AES.encrypt(string, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
        var encryptedString = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        var output = {
            'ciphertext': encryptedString,
            'iv': CryptoJS.enc.Hex.stringify(iv),
            'salt': CryptoJS.enc.Hex.stringify(salt),
            'iterations': iterations
        };
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(output)));
    }

    
    decrypt(encryptedString) {
        
        var key =this.key;
        var json = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedString)));
        var salt = CryptoJS.enc.Hex.parse(json.salt);
        var iv = CryptoJS.enc.Hex.parse(json.iv);
        var encrypted = json.ciphertext;
        var iterations = parseInt(json.iterations);
        if (iterations <= 0) {
            iterations = 999; 
        }
        var encryptMethodLength = (this.encryptMethodLength()/4);
        var hashKey = CryptoJS.PBKDF2(key, salt, {'hasher': CryptoJS.algo.SHA512, 'keySize': (encryptMethodLength/8), 'iterations': iterations});
        var decrypted = CryptoJS.AES.decrypt(encrypted, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    EncryptData(){
        var details = {
          'RDHIAFHYVV':'PNZNVGJEWELERY',
          'YTOGUFKZOZJ': '3832b7a88a20d2b8d3951516b033571c',
          'MJXLXYQXEEF': '3',
          'JNSINEAQZNV': '2',    // user id
          'PZIJWJSWDID': '1',    // Page_No  
          'QEFKGHKXTXE': '0',     // Array_Tag
          'EAUVGLLPYGZ': '{"Style_No":[],"Amount":[{"From":"","To":""}],"Category_Id":[],"Collection_Id":[],"Avalibility":[],"Type":[],"Metal_Type":[],"Metal_KT":[],"Diamond_Color_Id":[],"Diamond_Clarity_Id":[]}'    
        }
        // var DetailsArray = new FormData();
        // DetailsArray.append('details', this.CommonHelper.encrypt(JSON.stringify(details)));
        // var link = this.CommonHelper.serviceUrl();
        // this.http.post(link, DetailsArray).subscribe(data => {
        //   this.result = data['response'];
        //   var decryptedsd = this.CommonHelper.decrypt(this.result);
        //   console.log(decryptedsd);
        // });
      }
    
    
  }