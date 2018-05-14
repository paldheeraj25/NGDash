import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserUtilityService } from './user-utility.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class PaymentService {

  orderHistoryUrl = environment.apiUrl + "getConversionRates";
  gerUserWaveAsset = environment.apiUrl + "getUserWavesAssetListAll";
  getAnalyticsApi = environment.apiUrl + "getAnalyticsData";
  getInvestCountDataApi = environment.apiUrl + "getInvestCountData";
  getPayPalApiUrl = environment.apiUrl + "processPayPalTransaction";
  getDexApiUrl = environment.apiUrl + "purchaseBoltt";
  getKycStatusUrl = environment.apiUrl + "getKycStatus";

  constructor(private http: HttpClient, private userUtilityService: UserUtilityService) { }

  raiseOrder(orderDetails: any) {
    console.log('inside payment srevice');
    console.log(orderDetails);
    return true;
  }

  getConversionRate(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.orderHistoryUrl, 'get');
  }

  getUserWaveAsset(data): Observable<any> {
    return this.userUtilityService.apiGateWay(this.gerUserWaveAsset, 'post', data);
  }

  getAnalyticsData(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.getAnalyticsApi, 'get');
  }

  getInvestCountData(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.getInvestCountDataApi, 'get');
  }

  getPayPalApi(data: any): Observable<any> {
    return this.userUtilityService.apiGateWay(this.getPayPalApiUrl, 'post', data);
  }

  getDexApi(data: any): Observable<any> {
    return this.userUtilityService.apiGateWay(this.getDexApiUrl, 'post', data);
  }

  verifyOtp(data): Observable<any> {
    const otpVerifyApi = environment.apiUrl + 'dashboardverifyotp';
    return this.userUtilityService.apiGateWay(otpVerifyApi, 'post', data);
  }

  getKycStatus(): Observable<any> {
    return this.userUtilityService.apiGateWay(this.getKycStatusUrl, 'get');
  }

  getKycToken(data): Observable<any> {
    const tokenUrl = environment.apiUrl + 'getToken';;
    return this.userUtilityService.apiGateWay(tokenUrl, 'post', data);
  }
}
