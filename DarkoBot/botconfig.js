const prefix = process.env.DARKOBOT_PREFIX;

const GetParams = (message) => {
    let [_prefix = '', command = '', ...params] = (message+'').split(' ');
    let validCommand = false;

    if(_prefix.startsWith(prefix)){
        validCommand = true;

        let [, _command = ''] = _prefix.split(prefix);
        if(_command !== ''){
            _prefix = prefix;
            params = [command, ...params];
            command = _command;
        }
    }

    return{
        _prefix,
        command,
        params,
        validCommand
    }
}

module.exports = {
    prefix,
    GetParams
}