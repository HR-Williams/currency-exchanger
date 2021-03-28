import CurrencyChanger from './currency-changer.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $('#currency').selected("selected");
  $('.show-errors').text("")
}

function getElements(response) {
  if (response.result === "success") {
    $('.showRate').text(`${amount}USD is ${response.conversion_result} ${currency}`);
  } else if (response.result === "error") { $('.showResponseError').text("Unfortunatly the matrix (the universe? do we know?) can't show you the conversion rate right now. It is beyond your control, just like the market itself. Money is made up but unfortunately capitalism is real and we live in it. If possible try to throw aside the concept of scarcity. If those of us vibrating on the same wave, tune in to each other's frequency we could all live in abundance.")
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  } 
}

$(document).ready(function() {
  $('#currencyAmount').click(function() {
    let amount = parseInt($('#amount').val());
    let currency = $('#currency').val();
    clearFields();
    CurrencyChanger.getRate(currency).then(function(response) {
      getElements(response)
    });
  });
});