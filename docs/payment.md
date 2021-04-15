---
layout: default
title: Payment
permalink: /payment/
---

<!-- IMPORTANT! Keep here -->
<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- IMPORTANT! Keep here -->
<!-- This provides an error message in case things go wrong.. -->
<div id="error-message"></div>

## Payment Details

**IMPORTANT:** Both steps must be completed! Please read the below instructions carefuly.

## Step 1. 

Fill in the registration form if you haven't already done so. This is to ensure that there are still spots available.

[Register Here!](https://docs.google.com/forms/d/e/1FAIpQLSepRLi75DmKGbWiJGqSudIM-pKSDM9meTR1KXY_zH9UJjixZQ/viewform?usp=sf_link)


## Step 2. 

Click on the payment link below that corresponds to your date. You will receive a receipt via EMAIL.

It is important that you fill out the registration form FIRST. 

Paying for the incorrect date will result in a credit rather than a refund.

<br />

| Day      | Date         | Payment Link                                                                                                                                                                                               |
|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Saturday | May 8        | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for May 8</button> |
| | |
| Monday   | May 17       | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for May 17</button> |
| | |
| Monday   | May 31       | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for May 31</button> |
| | |
| Monday   | June 7       | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for June 7</button> |
| | |
| Monday   | June 14      | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for June 14</button> |
| | |
| Monday   | June 21      | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for June 21</button> |
| | |
| Monday   | July 5       | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for July 5</button> |
| | |
| Monday   | July 19      | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for July 19</button> |
| | |
| Monday   | July 26      | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for July 26</button> |
| | |
| Monday   | August 9     | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for August 9</button> |
| | |
| Monday   | August 16    | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for August 16</button> |
| | |
| Monday   | August 23    | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for August 23</button> |
| | |
| Monday   | August 30    | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for August 30</button> |
| | |
| Monday   | September 13 | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for September 13</button> |
| | |
| Friday   | September 24 | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for September 24</button> |
| | |
| Monday   | September 27 | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for September 27</button> |
| | |
| Monday   | October 4    | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for October 4</button> |
| | |
| Sunday   | October 10   | <button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" id="checkout-button-sku_JJ8ACbEqBucebv" role="link" type="button">Pay for October 10</button> |
| | |


<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->

<script>
(function() {
  var stripe = Stripe('pk_test_ziaFRXkdbhGTesYaYB6FAtv900ou3eC6GP');

  var checkoutButton = document.getElementById('checkout-button-sku_JJ8ACbEqBucebv');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'sku_JJ8ACbEqBucebv', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: window.location.protocol + '//kwsportracing.ca/success/',
      cancelUrl: window.location.protocol + '//kwsportracing.ca/payment/',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
