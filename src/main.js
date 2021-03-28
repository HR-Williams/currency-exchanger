import CurrencyChanger from './currency-changer.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $('.showErrors').text("");
  $('.showRate').text("");

}

function getElements(response) {
  if (response.result === "success") {
    $('.showRate').text(`Your USD query is ${response.conversion_result} ${response.target_code}`);
  } else if (response["error-type"] === "unsupported-code") {
    $('.showErrors').text("You chose Agama Dollars, the currency on the Lizard Planet. Unfortunatly the matrix (the universe? do we know?) can't show you that conversion rate right now. It is beyond your control, just like the market itself. Money is made up but unfortunately capitalism is real and we live in it. If possible try to throw aside the concept of scarcity. If those of us vibrating on the same wave, tune in to each other's frequency we could all live in abundance. Or if you are too beat down for that just play the game and choose a currency from planet Earth.");
  } else {
    $('.showErrors').text(`There was an error: ${response.message}. Please enter a number.`);
  } 
}

$(document).ready(function() {
  $('#currencyAmount').click(function() {
    let amount = parseInt($('input#amount').val());
    let currency = $('#currency').val();
    clearFields();
    CurrencyChanger.getRate(currency, amount).then(function(response) {
      getElements(response);
    });
  });
});