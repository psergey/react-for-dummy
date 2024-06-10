import { AxiosInstance, AxiosResponse } from 'axios';
import { CardResponse } from './card.types';

export class CardService {
  constructor(private _client: AxiosInstance) {}

  getCards(search?: string): Promise<AxiosResponse<CardResponse>> {
    return this._client.get<CardResponse>(`/search.php?s=${search ?? ''}`);
  }
}
