# Accept payments with Velox Checkout

This sample will illustrate how to integrate with Velox Checkout, with step-by-step descriptions and the expected API schemas for each step.

![Velox Merchant Checkout UML Diagram](/src/assets/images/uml-diagram.png)

## Description of steps

1. **Checkout Creation**

1.1 User initiates a checkout (e.g., by clicking "Pay" on the frontend).
1.2 The frontend sends a `POST` request to `/merchant/checkout/create` on the backend.
1.3 Backend creates a new checkout entry and responds with the generated `id` and `externalId`.

2. **Get Checkout Status**

2.1 The frontend polls (or queries) the backend with `GET /merchant/checkout/get?id=checkout_abcdef123456` to retrieve the status and details of the checkout.
2.2 Backend returns the status and details.

3. **Webhook Transaction Status Update**

3.1 The payment provider sends a webhook `POST` to `/merchant/checkout/webhook` with the new status (e.g., completed, failed).
3.2 Backend updates the checkout status in the database accordingly.

4. **(Optional) Frontend Polling for Updated Status**

4.1 The frontend may continue polling `/merchant/checkout/get` to check for status changes after the webhook is processed.
4.2 Backend responds with the updated status and details.

```
{
    "id": 9,
    "externalId": "k8O4SVRkbgxqyqW3SX9F"
}
```

## Demo

You can view what the checkout flow would look like [here](https://demo.veloxwallet.com/)

The demo will use Velox as a payment option during checkout to simulate the whole flow.

Read more about the merchant checkout flow at [https://docs.veloxwallet.com](https://docs.veloxwallet.con)

## How to run locally

To run it locally, open a terminal and follow the steps below

**1. Clone the repository**

The command below will manually clone the project and navigate to the installed project

```
git clone https://github.com/MoonLabLtd/velox-checkout-example.git
cd velox-checkout-example
```

You will need a server URL in order to run the demo and call the backend. Create a .env file in the root folder of the project and insert the value here

```
VITE_PUBLIC_SERVER_URL=<replace-with-your-server-url>
```

**2. Install Dependencies**

In order for the project to run, the required dependencies need to be install first

```
pnpm install
```

**3. Run the project**

```
pnpm run dev
```

## Get Support

If you encounter any issues, get stuck or have questions. Please send a detailed report to our suppport team at [info@veloxwallet.com](mailto:info@veloxwallet.com)
