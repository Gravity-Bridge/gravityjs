export const MSG_SEND_TO_ETH_TYPES = {
  MsgValue: [
    { name: 'sender', type: 'string' },
    { name: 'eth_dest', type: 'string' },
    { name: 'amount', type: 'TypeCoin[]' },
    { name: 'bridge_fee', type: 'TypeCoin[]' },
    { name: 'chain_fee', type: 'TypeCoin[]' },
  ],
  TypeCoin: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
}
export function createMsgSendToEth(
  sender: string,
  eth_dest: string,
  amount: string,
  denom: string,
  bridge_fee: string,
  chain_fee: string,
) {
  return {
    type: 'gravity/MsgSendToEth',
    value: {
      sender,
      eth_dest,
      amount: [
        {
          amount,
          denom,
        },
      ],
      bridge_fee: [
        {
          amount: bridge_fee,
          denom,
        },
      ],
      chain_fee: [
        {
          amount: chain_fee,
          denom,
        },
      ],
    },
  }
}
