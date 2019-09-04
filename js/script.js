var Counter = React.createClass({
 
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    componentDidMount: function () {
        console.log('Zamieszczono licznik nr', number, '\n (wyslano zapytanie do serwera...).');
    },
    shouldComponentUpdate: function() {
        console.log('true');
    },
    componentDidUpdate: function () {
        console.log('Zaktualizowano komponent.');
    },
    componentWillUnmount: function () {
        console.log('Koniec życia komponentu.');
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },    
    render() {
        return React.createElement('div', {id: 'counter'}, this.state.counter,
            React.createElement('button', {onClick: this.increment}, 'Add 1'),
            React.createElement('button', {onClick: this.decrement}, 'Minus 1')
        )
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));