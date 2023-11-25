var string = 'Mohamed Badr';
var formatName = function formatName(user) {
    return user.toUpperCase();
};
var app = React.createElement(
    'div',
    null,
    'Hello World!',
    React.createElement('br', null),
    ' ',
    string,
    React.createElement('br', null),
    ' ',
    1 + 1,
    React.createElement('br', null),
    ' ',
    formatName(string),
    React.createElement('br', null),
    ' ',
    string + '#NO.1',
    React.createElement(
        'div',
        { id: 'id' + '1', className: 'calss' + '1' },
        '1'
    )
);

ReactDOM.render(app, document.getElementById('root'));