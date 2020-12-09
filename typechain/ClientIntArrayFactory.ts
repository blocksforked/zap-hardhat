/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ClientIntArray } from "./ClientIntArray";

export class ClientIntArrayFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClientIntArray {
    return new Contract(address, _abi, signerOrProvider) as ClientIntArray;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "response",
        type: "int256[]",
      },
    ],
    name: "callback",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];