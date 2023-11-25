const string = 'Mohamed Badr'
const formatName = function(user){
    return user.toUpperCase()
}
const app = <div>
    Hello World!
    <br/> {string}
    <br/> {1 + 1}
    <br/> {formatName(string)}
    <br/> {string + '#NO.1'}
    <div id={'id' + '1'} className={'calss' + '1'}>1</div>
    </div>

ReactDOM.render(app, document.getElementById('root'))