/* eslint-disable react/prop-types */
import GooglePayButton from "@google-pay/button-react";

const Gpay = (props) => {
  return (
    <>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantID",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "123456789987",
            merchantName: "DemoMerchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: `${props.total}`,
            currencyCode: "INR",
            countryCode: "IN",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log(paymentData);
          return { transactionState: "SUCCESS" };
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="buy"
      ></GooglePayButton>
    </>
  );
};
export default Gpay;

// biji file ma component import kari ne je total devo hoi e props ma
// lakhi nakhje

// niche no code bija file ma lakhvano

// import Gpay from "./Payment";
//  <Gpay total={total} />
