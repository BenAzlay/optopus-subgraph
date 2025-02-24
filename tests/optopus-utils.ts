import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AssetsReturned,
  OptionExercised,
  OptionMinted,
  OptionPurchased,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/Optopus/Optopus"

export function createAssetsReturnedEvent(
  optionId: BigInt,
  owner: Address
): AssetsReturned {
  let assetsReturnedEvent = changetype<AssetsReturned>(newMockEvent())

  assetsReturnedEvent.parameters = new Array()

  assetsReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "optionId",
      ethereum.Value.fromUnsignedBigInt(optionId)
    )
  )
  assetsReturnedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return assetsReturnedEvent
}

export function createOptionExercisedEvent(
  optionId: BigInt,
  user: Address,
  amount: BigInt,
  profit: BigInt
): OptionExercised {
  let optionExercisedEvent = changetype<OptionExercised>(newMockEvent())

  optionExercisedEvent.parameters = new Array()

  optionExercisedEvent.parameters.push(
    new ethereum.EventParam(
      "optionId",
      ethereum.Value.fromUnsignedBigInt(optionId)
    )
  )
  optionExercisedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  optionExercisedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  optionExercisedEvent.parameters.push(
    new ethereum.EventParam("profit", ethereum.Value.fromUnsignedBigInt(profit))
  )

  return optionExercisedEvent
}

export function createOptionMintedEvent(
  optionId: BigInt,
  owner: Address,
  isCall: boolean,
  strikePrice: BigInt,
  expiry: BigInt
): OptionMinted {
  let optionMintedEvent = changetype<OptionMinted>(newMockEvent())

  optionMintedEvent.parameters = new Array()

  optionMintedEvent.parameters.push(
    new ethereum.EventParam(
      "optionId",
      ethereum.Value.fromUnsignedBigInt(optionId)
    )
  )
  optionMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  optionMintedEvent.parameters.push(
    new ethereum.EventParam("isCall", ethereum.Value.fromBoolean(isCall))
  )
  optionMintedEvent.parameters.push(
    new ethereum.EventParam(
      "strikePrice",
      ethereum.Value.fromUnsignedBigInt(strikePrice)
    )
  )
  optionMintedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return optionMintedEvent
}

export function createOptionPurchasedEvent(
  optionId: BigInt,
  buyer: Address,
  amount: BigInt,
  totalCost: BigInt
): OptionPurchased {
  let optionPurchasedEvent = changetype<OptionPurchased>(newMockEvent())

  optionPurchasedEvent.parameters = new Array()

  optionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "optionId",
      ethereum.Value.fromUnsignedBigInt(optionId)
    )
  )
  optionPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  optionPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  optionPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "totalCost",
      ethereum.Value.fromUnsignedBigInt(totalCost)
    )
  )

  return optionPurchasedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
