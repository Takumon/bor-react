import PrizeBcApi from "../apis/prizeBcApi"
import PrizeBcConverter from "./converter/prizeBcConverter"
import ApiErrorConverter from "./converter/apiErrorConverter"
import I18n from "../common/i18n"

export default class PrizeBcService {

  static updateAsync = async (user, prize, note) => {
    const request = PrizeBcConverter.convertUpdateRequest(user, prize, note)
    return await PrizeBcApi.update(request)
      .then((res) => {
        if (res.ok) {
          return { prize: '' }
        } else {
          return {
            // TODO: Taku
            error: ApiErrorConverter.createByApiError(res, I18n.get("ユーザーの更新に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static getAsync = async (username) => {
    return await PrizeBcApi.getAsync(username)
      .then((res) => {
        if (res.ok) {
          return { prize: PrizeBcConverter.getPrizeResponse(res.json) }
        } else {          
          return { error: ApiErrorConverter.createByApiError(res, I18n.get("失敗しました"))}
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })

  }
}
