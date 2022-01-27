import React from "react";
import './Calc.css';

class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.handlerClick}> {this.props.title} </button>
        )
    }
}

class Display extends React.Component {
    render() {
        return (
            <h3> {this.props.text} </h3>
        )
    }
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        let a = this.getRandInt();
        let b = this.getRandInt();
        this.state = {
            a: a,
            b: b,
            str: `Values: ${a} and ${b}`,
            calcResult: 0,
            strRes: 'Result:'
        }
    }

    resultSum = () => {
        const sum = this.state.a + this.state.b;
        this.setState({
            calcResult: sum,
            strRes: 'Result: ' + this.state.a + ' + ' + this.state.b + ' = ' + sum,
        });
    }

    resultMultiple = () => {
        const multiple = this.state.a * this.state.b;
        this.setState({
            calcResult: multiple,
            strRes: 'Result: ' + this.state.a + ' * ' + this.state.b + ' = ' + multiple,
        });
    }

    resultSubt = () => {
        const subt = this.state.a - this.state.b;
        this.setState({
            calcResult: subt,
            strRes: 'Result: ' + this.state.a + ' - ' + this.state.b + ' = ' + subt,
        });
    }

    resultDiv = () => {
        const div = this.state.a / this.state.b;
        this.setState({
            calcResult: div,
            strRes: 'Result: ' + this.state.a + ' / ' + this.state.b + ' = ' + div,
        });
    }


    updateClick = () => {
        let newA = this.getRandInt();
        let newB = this.getRandInt();

        this.setState({
            a: newA,
            b: newB,
            str: `Values: ${newA} and ${newB}`,
            strRes: 'Result:'
        })
    }

    getRandInt(max = 1000) {
        return Math.trunc(Math.random() * max);
    }

    render() {
        return (
            <div className="wrapper">
                <h2> Calculator</h2>
                <Display text={this.state.str}></Display>
                <Display text={this.state.strRes}></Display>
                <div className="operGroup">
                    <Button handlerClick={this.resultSum} title={'+'}></Button>
                    <Button handlerClick={this.resultMultiple} title={'*'}></Button>
                    <Button handlerClick={this.resultSubt} title={'-'}></Button>
                    <Button handlerClick={this.resultDiv} title={'/'}></Button>
                </div>
                <Button title={'Get random values'} handlerClick={this.updateClick}></Button>
            </div>
        )
    }
}

export default Calc;