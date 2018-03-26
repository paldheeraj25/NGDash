import { Injectable, OnInit } from '@angular/core';
const Web3 = require('web3');
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare let require: any;
declare let window: any;

const contractAbi = require('./contract.api.json');
const contractAddress = '0xc333b971ceb08a446d73fabe7ebff0a61777ae68';


@Injectable()
export class ContractService implements OnInit {

  private _account: string = null;
  public _web3: any;
  private _contract: any;
  private _contractAddress: string;

  public tokenPurchased: any = new BehaviorSubject(null);
  public totalParticipant: any = new BehaviorSubject(null);

  constructor() {
    this.initializeWeb3();
  }

  ngOnInit() {
    console.log('inside contract service');
  }

  initializeWeb3() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      console.log('provider: Metamask')
      this._web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn('No Provider found trying to connect local provider');
      // this._web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    this._contract = this._web3.eth.contract(contractAbi).at(contractAddress);
    this.WavesTransfer();
  }

  serviceCall() {
    console.log('service test');
  }

  public async totalSupply(): Promise<number> {
    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      return this._contract.totalSupply((err, result) => {
        if (err != null) {
          return reject(err);
        }
        result = result.toString();
        return resolve(result);
      });
    }) as Promise<number>;
  }

  public async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            // console.log('There was an error fetching your accounts.');
            return;
          }
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client or Metamask is configured correctly.'
            );
            return;
          }
          return resolve(accs[0]);
        })
      }) as string;
      this._web3.eth.defaultAccount = this._account;
    }
    // console.log(Promise.resolve(this._account));
    return Promise.resolve(this._account);
  }

  public async balanceOf(): Promise<number> {
    const account = await this.getAccount();
    console.log(account);
    return new Promise((resolve, reject) => {
      return this._contract.balanceOf(account, function (err, result) {
        if (err != null) {
          return reject(err);
        }
        result = result.toString();
        return resolve(result);
      });
    }) as Promise<number>;
  }

  public WavesTransfer() {
    return this._contract.WavesTransfer().watch(function (error, result) {
      console.log('event triggered');
      if (!error) {
        // console.log('new owner:', result.args);
        console.log(result);
      } else {
        // console.error('error: ' + error);
      }
    });
  }

  public async moveToWaves(): Promise<any> {
    // this.WavesTransfer();
    console.log('moving to waves');

    return new Promise((resolve, reject) => {
      return this._contract.moveToWaves.call('3N2dJmGYqrTgcbiZWfiCkqXCfK6vZKMQLzD',
        2000000,
        { from: '0x3d4079B588630918f8966460CdB0908d71A551a3', gas: 300000 },
        (err, result) => {
          if (err != null) {
            console.log('err' + err);
            return reject(err);
          }
          //this.WavesTransfer();
          console.log('result for transfer' + result);
          return resolve(result);
        });
    }) as Promise<any>;
  }
}
