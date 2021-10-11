import { Component } from 'react';

export class AddListItemForm extends Component {
    constructor(props) {
        super(props)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.state = {
            item: '',
        }
    };
    handlerChange(event) {
        this.setState(() => {
            if(event.target.value.includes('!'))
            return({
                warn: 'Do not use symbol "!" !',
                item: '',
            })
            else return({
                item: event.target.value,
            });
        });
    };

    handlerSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.item);
    };
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div style={{color:'red'}}>{this.state.warn}</div>
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