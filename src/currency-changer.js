export default class CurrencyChanger {
  static getRate(currency, amount) {
    return fetch(`https://v6.   exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status.Text);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}