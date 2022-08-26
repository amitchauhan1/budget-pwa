import { Injectable } from '@angular/core';
import { UrlBuilder } from './url-builder';
import { QueryStringParameters } from './query-string-parameters';
import { Constants } from './apiConstant';


@Injectable({providedIn:'root'})
export class ApiEndpointsService {
       
  constructor(    
    private constants: Constants
  ) { }
  
  /* #region URL CREATOR */
  public createUrl(
    action: string
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
        this.constants.IS_TEST_API ? this.constants.API_MOCK_ENDPOINT :   
      this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  public createUrlWithQueryParameters(
    action: string,   
    queryStringHandler?: 
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
        this.constants.IS_TEST_API ? this.constants.API_MOCK_ENDPOINT :   
        this.constants.API_ENDPOINT, 
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  
  // URL WITH PATH VARIABLES
  public createUrlWithPathVariables(
    action: string,     
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
        this.constants.IS_TEST_API ? this.constants.API_MOCK_ENDPOINT :   
        this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  /* #endregion */
}