import {
  AssetsReturned as AssetsReturnedEvent,
  OptionExercised as OptionExercisedEvent,
  OptionMinted as OptionMintedEvent,
  OptionPurchased as OptionPurchasedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/Optopus/Optopus"
import {
  AssetsReturned,
  OptionExercised,
  OptionMinted,
  OptionPurchased,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/schema"

export function handleAssetsReturned(event: AssetsReturnedEvent): void {
  let entity = new AssetsReturned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.optionId = event.params.optionId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOptionExercised(event: OptionExercisedEvent): void {
  let entity = new OptionExercised(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.optionId = event.params.optionId
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.profit = event.params.profit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOptionMinted(event: OptionMintedEvent): void {
  let entity = new OptionMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.optionId = event.params.optionId
  entity.owner = event.params.owner
  entity.isCall = event.params.isCall
  entity.strikePrice = event.params.strikePrice
  entity.expiry = event.params.expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOptionPurchased(event: OptionPurchasedEvent): void {
  let entity = new OptionPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.optionId = event.params.optionId
  entity.buyer = event.params.buyer
  entity.amount = event.params.amount
  entity.totalCost = event.params.totalCost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
