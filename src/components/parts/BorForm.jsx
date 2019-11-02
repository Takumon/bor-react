import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Input, Button, Select } from "antd"
import User from "../../libs/models/user"
import Avatar from "../basics/Avatar"
import I18n from "../../libs/common/i18n"
import ApplicationSetting from "../../libs/common/applicationSetting"

class UserForm extends Component {
  constructor(props) {
    super(props)
    const user = props.user
    this.state = {
      name: user.name,
      password: user.password,
      avatar: user.avatar,
    }
    this.handleAvatarChange = this.handleAvatarChange.bind(this)
    this.selectUser = this.selectUser.bind(this)
  }

  render() {
    const avatars = ApplicationSetting.getAvatars()
    const saveButtonLabel = (!this.props.isSavingProcessing) ? I18n.get("保存") : I18n.get("保存中")
    const disabled = this.props.isSavingProcessing || this.state.name === ""
    return (
      <div>
        <Col>
          <h1>Honoring Chaco Taco</h1>
        </Col>
        <Col>
          <Row>
            {avatars.slice(0, 3).map(value => {
              return (
                <Col span={8} key={value}>
                  <Avatar avatar={value} size={"50px"} onClick={() => this.selectUser(value)}/>
                </Col>
              )
            })}
          </Row>
        </Col>
      </div >
    )
  }


  handleAvatarChange(value) {
    this.setState({ avatar: value })
  }
  selectUser(value) {
    alert(`You select ${value}`)
  }
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSavingProcessing: PropTypes.bool.isRequired,
}

export default UserForm
