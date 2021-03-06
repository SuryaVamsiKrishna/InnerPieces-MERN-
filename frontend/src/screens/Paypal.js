import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
    render() {
		const client = {
			sandbox:    'Your-Sandbox-Client-ID',
			production: 'Your-Production-Client-ID',
		}
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
}
};