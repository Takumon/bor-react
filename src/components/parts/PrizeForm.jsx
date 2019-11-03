import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Input, Button, Select } from "antd"
import User from "../../libs/models/user"
import Avatar from "../basics/Avatar"
import PrizeImg from "../basics/PrizeImg"
import I18n from "../../libs/common/i18n"
import ApplicationSetting from "../../libs/common/applicationSetting"

class PrizeForm extends Component {
  constructor(props) {
    super(props)

    const prizeImgs = ApplicationSetting.getPrizeImgs()
    this.state = {
      selectedPrize: prizeImgs[0],
      note: ""
    }
    this.prizeImgs = prizeImgs
    this.handleAvatarChange = this.handleAvatarChange.bind(this)
    this.onSendGifButtonClick = this.onSendGifButtonClick.bind(this)

    
  }

  render() {
    const prizeImgs = ApplicationSetting.getPrizeImgs()


    return (
      <div>
        <Row>
          <h1>Gift Honoring Prize to {this.props.user.name}</h1>
        </Row>
        <Row>
            {
              prizeImgs.map(prizeName => {
                return (
                  <Col key={prizeName} span={8}  style={{"textAlign": "center"}}>
                    <Row>
                      <PrizeImg
                        prizeName={prizeName}
                        size={"100px"}
                        isSelected={prizeName === this.state.selectedPrize}
                        onClick={() => this.selectPrize(prizeName)}
                      />
                    </Row>
                    <Row>
                      {prizeName}
                    </Row>
                  </Col>
                )  
            })
            }
        </Row>
        <Row style={{"marginTop": "10px"}}>
          <Input.TextArea
            value={this.state.note}
            onChange={(e) => this.handleTextChange(e, "note")}
            autosize={{ minRows: 5, maxRows: 20 }}
            placeholder="add note (optional)"
          />
        </Row>
        <Row type="flex" justify="end" style={{"marginTop": "10px"}}>
          <Button
            type="primary"
            size="large"
            onClick={() => this.onSendGifButtonClick(this.props.loginUser, this.props.user, this.state.selectedPrize, this.state.note)}
          >
            Gift
          </Button>
        </Row>
      </div>
    )
  }


  handleAvatarChange(value) {
    this.setState({ avatar: value })
  }

  selectPrize(prizeName) {
    this.setState({
      selectedPrize: prizeName,
    })
  }

  handleTextChange(e, key) {
    this.setState({ [key]: e.target.value })
  }

  onSendGifButtonClick(sender, reciever, prize, note) {
    // TODO: Taku
    console.log(sender, reciever, prize, note)
  }
}

PrizeForm.propTypes = {
  user: PropTypes.object.isRequired,
}

export default PrizeForm
