### proxy test

## Depends

- Node.js v0.10.x

## Setup

Install dependencies:

    npm install

NOTE: if you need the installation to work behind a proxy, then you need to set up npm to know your proxy. See http://jjasonclark.com/how-to-setup-node-behind-web-proxy for more details.

## Testing

#### With mock proxy

In one terminal start the server:

    node server.js

In another terminal run the test:

    node test.js

After several seconds you should see:

    test passed successfully!

#### With real proxy

Stop the server.js (no need for it now).

Set the environment setting of `HTTP_PROXY` then run:

    export HTTP_PROXY=http://user:pass@hostname:port
    node test.js

After several seconds you should see:

    test passed successfully!

## Troubleshooting

If you see the error `Error: Invalid protocol` then it means your `HTTP_PROXY` setting was invalid.