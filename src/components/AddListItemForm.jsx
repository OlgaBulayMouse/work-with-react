import { Component } from 'react';

export class AddListItemForm extends Component {
    constructor(props) {
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.state = {
            item: 'hello!',
        }
    };
    handlerChange(event) {
        this.setState({
            item: event.target.value,
        })
    };

    handlerSubmit(event) {
        event.preventDefault();
        console.log('hello!');
    };
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <input type={'text'}
                name={'item'}
                value={this.state.item}
                onChange={this.handlerChange}
                 />
                <input type={'submit'} />
            </form>
        )
    };
};