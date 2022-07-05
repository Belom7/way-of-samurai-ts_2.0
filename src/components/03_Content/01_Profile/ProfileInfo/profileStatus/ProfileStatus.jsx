import React, {Component} from 'react';

export class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    ActivateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    }

    DeActivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }


    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div><span onDoubleClick={this.ActivateEditMode}>{this.state.status || 'No status'}</span></div>
                    :
                    <div><input autoFocus={true} onBlur={this.DeActivateEditMode.bind(this)}
                                onChange={this.onChangeHandler}
                                value={this.state.status}/></div>}
            </div>
        );
    }
}

