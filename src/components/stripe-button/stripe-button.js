import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceforStripe = price * 100;
  const publishableKey = 'pk_test_51IjfpjC0KY7FixGNcOwj3JYjtPPslsmzQRrTQMcPdm9adtko3UFCWGb0LqbXPrOoSyqCDpEEs11nwJ3V84xWFFXm00Jb7nYiTe';

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Sianoor'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={priceforStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;