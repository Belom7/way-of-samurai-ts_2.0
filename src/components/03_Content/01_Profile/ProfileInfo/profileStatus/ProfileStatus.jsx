import React, {Component} from 'react';

export class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    ActivateEditMode() {
        this.setState({
            editMode:true
        })
    }

    DeActivateEditMode() {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ? <div><span onDoubleClick={this.ActivateEditMode.bind(this)}>status</span></div>
                    : <div><input autoFocus={true} onBlur={this.DeActivateEditMode.bind(this)} value={'dd'}/></div>}
            </div>
        );
    }
}

