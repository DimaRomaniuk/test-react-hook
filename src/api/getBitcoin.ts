

export interface IBitcoinResponce {
    "time": {
      "updated": string,
      "updatedISO": string,
      "updateduk": string
    },
    "disclaimer": string,
    "chartName": string,
    "bpi": {
      "USD": {
        "code": string,
        "symbol": string,
        "rate": string,
        "description": string,
        "rate_float": number
      },
      "GBP": {
        "code": string,
        "symbol": string,
        "rate": string,
        "description": string,
        "rate_float": number
      },
      "EUR": {
        "code": string,
        "symbol": string,
        "rate": string,
        "description": string,
        "rate_float": number
      }
    }
  }

export const getBitcoin = async () => {
    const response  = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    return await response.json() as Promise<IBitcoinResponce>;
}
