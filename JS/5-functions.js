function repeater(operation, interval) {
  setInterval(operation, interval);
}



repeater(() => { console.log('Second... '); }, 1000);
