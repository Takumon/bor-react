import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUser, faTasks, faCogs, faDoorOpen, faFilter,
  faEdit, faTrashAlt, faCommentDots, faAward,
} from "@fortawesome/free-solid-svg-icons"
import LoginContainer from "../containers/LoginContainer"
import MainContainer from "../containers/MainContainer"
import settingJson from "../setting.json"
import ApplicationSetting from "../libs/common/applicationSetting"
import I18n from "../libs/common/i18n"

import "antd/dist/antd.css"
import "./App.css"

import styles from "./base.module.css"
import ApiCommon from "../libs/apis/apiCommon"
import BcApiCommon from "../libs/apis/bcApiCommon"

library.add(
  faUser, faTasks, faCogs, faDoorOpen, faFilter,
  faEdit, faTrashAlt, faCommentDots, faAward,
)
ApplicationSetting.init(settingJson)
I18n.setLocale(ApplicationSetting.getLocale())
ApiCommon.init(ApplicationSetting.getServerSetting())
BcApiCommon.init(ApplicationSetting.getBcServerSetting())

const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/index.html" component={LoginContainer} />
      <Route path="/main" component={MainContainer} />
    </div>
  </BrowserRouter>
)
export default App
