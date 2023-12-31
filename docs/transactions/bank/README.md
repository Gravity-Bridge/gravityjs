# Bank

This package creates transaction payloads with messages from the [Bank Module](https://docs.cosmos.network/main/modules/bank).

Find the `TxContext` and `TxGenerated` types in the Transaction Docs.

### MsgSend

```ts
export interface MsgSendParams {
  destinationAddress: string
  amount: string
  denom: string
}

/**
 * Creates a transaction for a MsgSend object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/bank#msgsend | MsgSend}
 *
 * @param context - Transaction Context
 * @param params - MsgSend Params
 * @returns Transaction with the MsgSend payload
 *
 */
export const createTxMsgSend: (context: TxContext, params: MsgSendParams): TxGenerated
```
