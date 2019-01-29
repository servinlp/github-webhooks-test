import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class Comp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ['me', 'react', 'you'],
            curr: 0,
        }
        this.upgradeWord = this.upgradeWord.bind(this)
    }

    upgradeWord() {
        const v = this.state.curr === this.state.word.length - 1 ? 0 : this.state.curr + 1
        this.setState({
            curr: v
        })
    }

    render() {
        return (
            <Fragment>
                <p onClick={this.upgradeWord}>{_.join(['Hello', 'there', 'from', this.state.word[this.state.curr]], ' ')}</p>
            </Fragment>
        )
    }
}