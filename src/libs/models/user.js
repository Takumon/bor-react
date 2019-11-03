export default class User {
  constructor(id, name, avatar, version, address, passphrase) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.version = version
    this.address = address
    this.passphrase = passphrase
    this.numberOfPrizes = "0,0,0"
    this.newPassword = ""
  }

  static createIdToUserMap(users) {
    const result = {}
    users.forEach(user => {
      result[user.id] = user
    })
    return result
  }

  static PrizeType = {
    Leadership: "Leadership",
    Bravely: "Bravely",
    Wiseness: "Wiseness",
  }

  static IncrementPrizeNumber = (user, selectedPrize) => {
    const prizeNums = (user.numberOfPrizes) ? user.numberOfPrizes.split(",") : "0,0,0".split(",")
    switch(selectedPrize) {
    case User.PrizeType.Leadership:
      prizeNums[0] = Number(prizeNums[0]) + 1
      break
    case User.PrizeType.Bravely:
      prizeNums[1] = Number(prizeNums[1]) + 1
      break
    case User.PrizeType.Wiseness:
        prizeNums[2] = Number(prizeNums[2]) + 1
      break
    }
    user.numberOfPrizes = prizeNums.join(",")
  }
}

export class UserCreateRequest {
  constructor(name, password, avatar, address, passphrase, numberOfPrizes) {
    this.name = name
    this.password = password
    this.avatar = avatar
    this.address = address
    this.passphrase = passphrase
    this.numberOfPrizes = numberOfPrizes
  }
}
