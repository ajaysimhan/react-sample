import React, { Component } from 'react';

class SudokuTableUI extends Component {

    getValue = (fieldValue) => {
        return fieldValue ? fieldValue : undefined
    }

    render(props) {
        const cellStyle = {
            height: '50px',
            width: '50px'

            
        }
        const {userName} = this.props
  
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_00" value={this.getValue(this.props.myState._00)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_01" value={this.getValue(this.props.myState._01)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_02" value={this.getValue(this.props.myState._02)}  />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_10" value={this.getValue(this.props.myState._10)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_11" value={this.getValue(this.props.myState._11)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_12" value={this.getValue(this.props.myState._12)}  />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_20" value={this.getValue(this.props.myState._20)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_21" value={this.getValue(this.props.myState._21)}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName)} name="_22" value={this.getValue(this.props.myState._22)}  />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SudokuTableUI