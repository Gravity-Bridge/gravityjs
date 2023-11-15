# GravityJS

JS and TS libs for interacting with Gravity Bridge via Ethereum wallets like MetaMask

## Credits

This repo is a fork of evmos/evmosjs, and all of the shared history is preserved. Please see the contributors page or the commit history to see the original creators and their contributions to that upstream repo. In fact it is a fork of althea-L1/altheajs, so it shares that history too.

## Installation

To install gravityjs packages in your project, follow the instructions corresponding to your package manager.

### NPM

Add the following line to an `.npmrc` file in your project root:

```ini
@buf:registry=https://buf.build/gen/npm/v1
```

Then run:

```bash
npm install @gravity-bridge/gravityjs
```

Or:

```bash
npm install @gravity-bridge/<package>
```

### Yarn v2.x or v3.x

Add the following to an `.yarnrc.yml` file in your project root:

```yaml
npmScopes:
  buf:
    npmRegistryServer: "https://buf.build/gen/npm/v1"
```

Then run:

```bash
yarn add @gravity-bridge/gravityjs
```

Or:

```bash
yarn add @gravity-bridge/<package>
```

Note that Yarn v1 is not supported ([see explanation](https://docs.buf.build/bsr/remote-packages/npm#other-package-managers)).

## Usage and Examples

### Query an Account

Query the account number, sequence, and pubkey for a given address.

```ts
import { generateEndpointAccount } from '@gravity-bridge/provider'

const address = 'gravity1...'

// Find node urls for either mainnet or testnet here:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = '...'
const queryEndpoint = `${nodeUrl}${generateEndpointAccount(address)}`

const restOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}

// Note that the node will return a 400 status code if the account does not exist.
const rawResult = await fetch(
  queryEndpoint,
  restOptions,
)

const result = await rawResult.json()

// The response format is available at @gravity-bridge/provider/rest/account/AccountResponse.
// Note that the `pub_key` will be `null` if the address has not sent any transactions.
/*
  account: {
    '@type': string
    base_account: {
      address: string
      pub_key?: {
        '@type': string
        key: string
      }
      account_number: string
      sequence: string
    }
    code_hash: string
  }
*/
```

### Get an Account's Public Key

Use Keplr or MetaMask to retrieve an account's public key
if it is not returned in the query response.
The public key is necessary in order to sign and broadcast
transactions, and it must be encoded as a compressed key in
`base64`.

#### Keplr

```ts
const cosmosChainID = 'gravity-bridge-3' // Hackathon testnet

const account = await window?.keplr?.getKey(cosmosChainID)
const pk = Buffer.from(account.pubKey).toString('base64')
```

#### MetaMask

Since MetaMask does not provide an interface to retrieve a user's
public key, we must sign a message and
[recover the key from a signature](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Public_key_recovery).

```ts
import { hashMessage } from '@ethersproject/hash'
import {
  computePublicKey,
  recoverPublicKey,
} from '@ethersproject/signing-key'

const accounts = await window?.ethereum?.request({
  method: 'eth_requestAccounts',
})

// Handle errors if MetaMask fails to return any accounts.
const message = 'Verify Public Key'

const signature = await window?.ethereum?.request({
  method: 'personal_sign',
  params: [message, accounts[0], ''],
})

// Compress the key, since the client expects
// public keys to be compressed.
const uncompressedPk = recoverPublicKey(
  hashMessage(message),
  signature,
)

const hexPk = computePublicKey(uncompressedPk, true)
const pk = Buffer.from(
  hexPk.replace('0x', ''), 'hex',
).toString('base64')
```

### Create a Signable Transaction

Create a transaction payload which can be signed using either Metamask or Keplr.

This example uses `MsgSend`. View all signable transaction payloads in the [Transaction Docs](https://github.com/Gravity-Bridge/gravityjs/tree/main/docs/transactions).

```ts
import {
  Chain,
  Sender,
  Fee,
  TxContext,
  MsgSendParams,
  createTxMsgSend,
  TxGenerated,
} from '@gravity-bridge/transactions'

const chain: Chain = {
  chainId: 417834,
  cosmosChainId: 'gravity-bridge-3',
}

// Populate the transaction sender parameters using the
// query API.
const sender: Sender = {
  accountAddress: <sender_account_address>,
  sequence: <sender_sequence>,
  accountNumber: <sender_account_number>,
  // Use the public key from the account query, or retrieve
  // the public key from the code snippet above.
  pubkey: <sender_pub_key>,
}

const fee: Fee = {
  amount: '4000000000000000',
  denom: 'ugraviton',
  gas: '200000',
}

const memo = ''

const context: TxContext = {
  chain,
  sender,
  fee,
  memo,
}

const params: MsgSendParams = {
  destinationAddress: <destination_address>,
  amount: <transaction_amount>,
  denom: 'ugraviton',
}

const tx: TxGenerated = createTxMsgSend(context, params)
```

### Sign the Transaction with MetaMask

Gravity Bridge supports EIP-712 signatures for Cosmos payloads to be signed using Ethereum wallets such as MetaMask.
The signature MUST NOT go in the signature field, and instead must be placed in an ExtensionOptionsWeb3Tx.

```ts
import { createTxRaw } from '@gravity-bridge/proto'
import { gravityToEth } from '@gravity-bridge/address-converter'
import { signatureToWeb3Extension } from '@gravity-bridge/transactions';

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { sender } = context

// Initialize MetaMask and sign the EIP-712 payload.
await window.ethereum.enable()

const senderHexAddress = gravityToEth(sender.accountAddress)
const eip712Payload = JSON.stringify(tx.eipToSign)

const signature = await window.ethereum.request({
  method: 'eth_signTypedData_v4',
  params: [senderHexAddress, eip712Payload],
})

const extension = signatureToWeb3Extension(chain, sender, signature);

const { legacyAmino } = tx
legacyAmino.body.extensionOptions.push(createAnyMessage(extension))

const bodyBytes = legacyAmino.body.toBinary()
const authInfoBytes = legacyAmino.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [new Uint8Array()],
)
```

### Sign the Transaction with Keplr (SignDirect)

GravityJS supports Cosmos SDK `SignDirect` payloads that can be signed using Keplr.
However, if you have an existing workflow to support Keplr and do not need Ledger support, then GravityJS is not necessary.

```ts
import { createTxRaw } from '@gravity-bridge/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context
const { signDirect } = tx

const signResponse = await window?.keplr?.signDirect(
  chain.cosmosChainId,
  sender.accountAddress,
  {
    bodyBytes: signDirect.body.toBinary(),
    authInfoBytes: signDirect.authInfo.toBinary(),
    chainId: chain.cosmosChainId,
    accountNumber: new Long(sender.accountNumber),
  },
)

if (!signResponse) {
  // Handle signature failure here.
}

const signatures = [
  new Uint8Array(Buffer.from(signResponse.signature.signature, 'base64')),
]

const { signed } = signResponse

const signedTx = createTxRaw(
  signed.bodyBytes,
  signed.authInfoBytes,
  signatures,
)
```

### Sign the Transaction with Keplr (EIP-712)

GravityJS also supports signing [EIP-712](https://eips.ethereum.org/EIPS/eip-712) payloads using Keplr.
This is necessary for Ledger users on Keplr, since the Ledger device cannot sign `SignDirect` payloads.
The signature MUST NOT go in the signature field, and instead must be placed in an ExtensionOptionsWeb3Tx.

```ts
import { EthSignType } from '@keplr-wallet/types';
import { createTxRaw } from '@gravity-bridge/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context

const eip712Payload = JSON.stringify(tx.eipToSign)
const signature = await window?.keplr?.signEthereum(
  chain.cosmosChainId,
  sender.accountAddress,
  eip712Payload,
  EthSignType.EIP712,
)

if (!signature) {
  // Handle signature failure here.
}

const extension = signatureToWeb3Extension(chain, sender, signature);

const { legacyAmino } = tx
legacyAmino.body.extensionOptions.push(createAnyMessage(extension))

const bodyBytes = legacyAmino.body.toBinary()
const authInfoBytes = legacyAmino.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [new Uint8Array()],
)
```

### Broadcast the Signed Transaction

Regardless of how the transaction is signed, broadcasting takes place the same way.

```ts
import {
  generateEndpointBroadcast,
  generatePostBodyBroadcast,
} from '@gravity-bridge/provider'

// First, sign a transaction using MetaMask or Keplr.
const signedTx = createTxRaw(...)

// Use the Tx broadcasting API usually on port 1317
const nodeUrl = "https://gravitychain.io:1317"

const postOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: generatePostBodyBroadcast(signedTx),
}

const broadcastEndpoint = `${nodeUrl}${generateEndpointBroadcast()}`
const broadcastPost = await fetch(
  broadcastEndpoint,
  postOptions,
)

const response = await broadcastPost.json()
```
