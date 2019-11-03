export default class User {
  constructor(id, name, avatar, version, address, passphrase, numberOfPrizes) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.version = version
    this.address = address
    this.passphrase = passphrase
    this.numberOfPrizes = numberOfPrizes
    this.newPassword = ""
  }

  static createIdToUserMap(users) {
    const result = {}
    users.forEach(user => {
      result[user.id] = user
    })
    return result
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
