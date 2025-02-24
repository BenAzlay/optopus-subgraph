import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AssetsReturned } from "../generated/schema"
import { AssetsReturned as AssetsReturnedEvent } from "../generated/Optopus/Optopus"
import { handleAssetsReturned } from "../src/optopus"
import { createAssetsReturnedEvent } from "./optopus-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let optionId = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAssetsReturnedEvent = createAssetsReturnedEvent(optionId, owner)
    handleAssetsReturned(newAssetsReturnedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssetsReturned created and stored", () => {
    assert.entityCount("AssetsReturned", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssetsReturned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "optionId",
      "234"
    )
    assert.fieldEquals(
      "AssetsReturned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
