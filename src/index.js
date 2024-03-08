const sendMessage = (message = 'moon') => {
    message = ` ${message}`;
    console.log("we going to the", message);
    return message;
}

sendMessage('sun');