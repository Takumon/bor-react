import BcApiCommon from "./bcApiCommon"


export default class PrizeBcApi {
  
  static update = async (request) => {
    return BcApiCommon.put(`/prizes`, request)
  }

  static get = async (userName) => {
    return BcApiCommon.get(`/prizes/${userName}.prize/whois`)
  }
}
