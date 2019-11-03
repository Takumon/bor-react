import UserSagas from "../../../sagas/userSagas"
import User from "../../models/user"



export default class PrizeBcConverter {
  static convertUpdateRequest = (user, prize, note) => {
    const params = user.passphrase.split(",")
    User.IncrementPrizeNumber(user, prize)
    return {
      base_req: {
        from: user.address,
        chain_id: "prizechain"
      },
      name: `${user.name}.prize`,
      amount: "1prizetoken",
      value: user.numberOfPrizes,
      owner: user.address,
      account: user.name,
      passphrase: params[0],
      sequence: params[1],
      accoutNumber: params[2],
    }
  }

  static getPrizeResponse = (prise) => {
    const { amount } = prise.result.price.find(p => p.denom === "prizetoken")
    return decirializePrizeAmount(amount)
  }
}

function decirializePrizeAmount(amount) {
  // TODO: Taku
  const tempAmount = "1,3,5"
  return amount.split(",")
}