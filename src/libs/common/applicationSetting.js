
export default class ApplicationSetting {
  static setting

  static init = (setting) => {
    ApplicationSetting.setting = setting
  }

  static getLocale() {
    return ApplicationSetting.setting.locale
  }

  static getServerSetting() {
    return ApplicationSetting.setting.server
  }

  static getBcServerSetting() {
    return ApplicationSetting.setting.bcserver
  }

  static getAvatars() {
    return ApplicationSetting.setting.avatars
  }

  static getPrizeImgs() {
    return ApplicationSetting.setting.prizes
  }
}
