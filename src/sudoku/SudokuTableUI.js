import React, { Component } from 'react';

class SudokuTableUI extends Component {

    render() {
        const cellStyle = {
            height: '50px',
            width: '50px'

            
        }
        const userName = this.props.userName
  
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_00")} name="_00" value={this.props.myState._00}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_01")} name="_01" value={this.props.myState._01}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_02")} name="_02" value={this.props.myState._02}  />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_10")} name="_10" value={this.props.myState._10}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_11")} name="_11" value={this.props.myState._11}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_12")} name="_12" value={this.props.myState._12}  />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_20")} name="_20" value={this.props.myState._20}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_21")} name="_21" value={this.props.myState._21}  />
                        </td>
                        <td>
                            <input type="text" style={cellStyle} readOnly onClick={(e) => this.props.handleClick(e, userName, "_22")} name="_22" value={this.props.myState._22}  />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SudokuTableUI