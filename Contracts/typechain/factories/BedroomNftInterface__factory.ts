/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  BedroomNftInterface,
  BedroomNftInterfaceInterface,
} from "../BedroomNftInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_designId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_categorie",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "mintingBedroomNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newDesignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "upgradeBedroomNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BedroomNftInterface__factory {
  static readonly abi = _abi;
  static createInterface(): BedroomNftInterfaceInterface {
    return new utils.Interface(_abi) as BedroomNftInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BedroomNftInterface {
    return new Contract(address, _abi, signerOrProvider) as BedroomNftInterface;
  }
}