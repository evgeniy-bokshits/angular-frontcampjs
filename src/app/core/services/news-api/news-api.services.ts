import { Injectable } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';

@Injectable()
export class NewsApiService {

  constructor(private configurationService: ConfigurationService) {}

  async getTopNewsForCountry(country: string) {
    const url = `${this.configurationService.baseUrl}${this.configurationService.endpoints.topheadlines}?` +
      `country=${country}&` +
      `apiKey=${this.configurationService.apiKey}`;

    return await this.fetchTopNewsByUrl(url);
  }

  async fetchTopNewsByUrl(url) {
    let response;
    try {
      // throw new Error('test handle exception');
      response = await fetch(url);
    } catch (error) {
      await alert(error);
    }

    return await response.json();
  }
}
