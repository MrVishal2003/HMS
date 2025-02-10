/* eslint-disable react/prop-types */
import GooglePayButton from "@google-pay/button-react";

const Gpay = ({ total }) => {
  return (
    <div className="w-full flex justify-center p-2 sm:p-4">
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
            totalPrice: `${total}`,
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
        className="max-w-[300px] sm:max-w-[400px]"
      />
    </div>
  );
};

export default Gpay;
