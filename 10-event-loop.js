function doAfterDelay(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}



doAfterDelay(function() {
    console.log('Это сообщение появится через 2 секунды!');
});
