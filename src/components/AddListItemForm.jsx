import { Component } from 'react';

export class AddListItemForm extends Component {
    constructor(props) {
        super(props)
        this.hanlerSubmit = this.hanlerSubmit.bind(this)
    };
    hanlerSubmit() {
        console.log('hello!');
    };
    render() {
        return (
            <form onSubmit={this.hanlerSubmit}>
                <input type={'text'} />
                <input type={'submit'} />
            </form>
        )
    };
};