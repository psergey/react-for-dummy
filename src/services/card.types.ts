export interface CardDTO {
  idDrink: number;
  strDrink: string;
  strInstructions: string;
  strTags: string;
  strDrinkThumb: string;
}

export interface CardResponse {
  drinks: CardDTO[];
}
