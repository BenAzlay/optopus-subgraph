// src/mapping.ts

import {
  OptionMinted as OptionMintedEvent,
  OptionPurchased as OptionPurchasedEvent,
  OptionExercised as OptionExercisedEvent,
  AssetsReturned as AssetsReturnedEvent,
} from "../generated/Optopus/Optopus"
import { Option, OptionPurchase, OptionExercise, AssetsReturn } from "../generated/schema"
import { log } from "@graphprotocol/graph-ts"

export function handleOptionMinted(event: OptionMintedEvent): void {
  // Create or load Option entity
  let id = event.params.optionId.toString()
  let option = new Option(id)

  // Populate fields
  option.owner = event.params.owner
  option.isCall = event.params.isCall
  option.strikePrice = event.params.strikePrice
  option.expiry = event.params.expiry
  // If you need more data from the contract, you can read them using callHandlers 
  // or from the event if they are included

  // Add block/time metadata
  option.createdAtTimestamp = event.block.timestamp
  option.createdAtBlock = event.block.number

  // Save
  option.save()
}

export function handleOptionPurchased(event: OptionPurchasedEvent): void {
  // ID for the purchase entity - can be txHash + logIndex for uniqueness
  let entityId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let purchase = new OptionPurchase(entityId)

  // Retrieve Option
  let optionId = event.params.optionId.toString()
  let option = Option.load(optionId)
  if (!option) {
    log.warning("Option with ID {} not found", [optionId])
    return
  }
  purchase.option = option.id

  // Purchase details
  purchase.buyer = event.params.buyer
  purchase.amount = event.params.amount
  purchase.totalCost = event.params.totalCost

  // Block & timestamp
  purchase.timestamp = event.block.timestamp
  purchase.blockNumber = event.block.number

  // Save
  purchase.save()
}

export function handleOptionExercised(event: OptionExercisedEvent): void {
  let entityId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let exercise = new OptionExercise(entityId)

  // Load the Option
  let optionId = event.params.optionId.toString()
  let option = Option.load(optionId)
  if (!option) {
    log.warning("Option with ID {} not found", [optionId])
    return
  }
  exercise.option = option.id

  // Exercise details
  exercise.user = event.params.user
  exercise.amount = event.params.amount
  exercise.profit = event.params.profit

  // Timestamps
  exercise.timestamp = event.block.timestamp
  exercise.blockNumber = event.block.number

  // Save
  exercise.save()
}

export function handleAssetsReturned(event: AssetsReturnedEvent): void {
  let entityId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let assetsReturn = new AssetsReturn(entityId)

  // Load the Option
  let optionId = event.params.optionId.toString()
  let option = Option.load(optionId)
  if (!option) {
    log.warning("Option with ID {} not found", [optionId])
    return
  }
  assetsReturn.option = option.id

  // Assets return details
  assetsReturn.owner = event.params.owner

  assetsReturn.timestamp = event.block.timestamp
  assetsReturn.blockNumber = event.block.number

  assetsReturn.save()
}
