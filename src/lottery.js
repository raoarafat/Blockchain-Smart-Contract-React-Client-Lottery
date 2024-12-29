import web3 from './web3';

// const address = '0x40E2F8ff22D7D63Ca74DFf9D035F09F0e10fBFcC';
// const abi = [
//   { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
//   {
//     inputs: [],
//     name: 'enter',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'getPlayers',
//     outputs: [
//       { internalType: 'address payable[]', name: '', type: 'address[]' },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'manager',
//     outputs: [{ internalType: 'address', name: '', type: 'address' }],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'pickWinner',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
//     name: 'players',
//     outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
//     stateMutability: 'view',
//     type: 'function',
//   },
// ];

// export default new web3.eth.Contract(abi, address);

const address = '0x354F360930CEEf634CA7D7e88a55910d49f99B68';
const abi = [
  {
    constant: true,
    inputs: [],
    name: 'manager',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pickWinner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getPlayers',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'enter',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'players',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
];

export default new web3.eth.Contract(abi, address);
