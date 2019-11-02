import React, { Component } from "react"
import Modal from "../basics/Modal"
import I18n from "../../libs/common/i18n"
import Avatar from "../basics/Avatar"
import { Table, Tooltip, Popconfirm } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BorForm from "./BorForm"
import User from "../../libs/models/user"


class SettingsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUserDialog: false,
      selectedUser: new User(
        '12345',
        'MockName',
        'dog',
        1,
      ),
    }
    this.toggleUserDialog = this.toggleUserDialog.bind(this)
  }

  componentDidMount() {
    this.props.loadUserList()
  }


  render() {
    // console.log(this.props.usersState && this.props.usersState.users )
    const { users } = this.props.usersState

    return (
      <div>
        Settings Form
        {
          this.props.usersState.users.length
        }

        <Table
          rowKey={record => record.id}
          columns={this.getUserTableColumns()} 
          dataSource={users} 
        />
        <Modal
          visible={this.state.showUserDialog}
          onCancel={this.toggleUserDialog}
          footer={null}
          destroyOnClose
          width={500}
        >
          <BorForm
            user={this.state.selectedUser}
            onSaveButtonClick={this.props.onUpdateUserButtonClick}
            isSavingProcessing={false}
          />
        </Modal>
      </div>

    )
  }

  getUserTableColumns() {
    return [
      {
        title: I18n.get("名前"),
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Avatar",
        key: "avatar",
        render: (user) => (
          <div>
            <Avatar avatar={user.avatar} size={"20px"} /> {user.avatar}
          </div>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (user) => (
          <div style={{ float: "left", display: "inline-block" }}>
            <Tooltip title={I18n.get("編集")}>
              <FontAwesomeIcon
                icon="edit"
                style={{ color: "forestgreen", marginRight: "5px" }}
                onClick={this.toggleUserDialog}
              />
            </Tooltip>
            <Tooltip title={I18n.get("削除")}>
              <Popconfirm
                title={I18n.get("削除しますか？")}
                okText={I18n.get("削除")}
                cancelText={I18n.get("キャンセル")}
                onConfirm={() => { this.props.onDeleteUserButtonClick(user) }}
                onCancel={() => { }}
              >
                <FontAwesomeIcon
                  icon="trash-alt"
                  style={{ color: "hotpink", marginRight: "5px" }}
                />
              </Popconfirm>
            </Tooltip>
          </div>
        ),
      },
    ]
  }

  toggleUserDialog() {
    this.setState({
      showUserDialog: !this.state.showUserDialog,
    })
  }
}



export default SettingsForm
