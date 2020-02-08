import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  baseUrl = 'https://newsapi.org/v2/';
  apiKey = '1ad36b795ee64edfa26331c9a4e0b302';
  endpoints = {
    topheadlines: 'top-headlines',
    everything: 'everything',
  };
}
