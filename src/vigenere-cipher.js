class VigenereCipheringMachine {
  constructor() {
    this.direct = true;
  };

  encrypt(message, key) {
    if (arguments.length < 2) throw new Error('Error!');

    let messUp = message.toUpperCase().split('');
    let keyUp = key.toUpperCase().split('');
    let result = '';

    let i = 0;

    messUp.map(char => {
      let chCode = char.charCodeAt(0);
      if (chCode > 64 && chCode < 91) {
        let keyCode = keyUp[i++].charCodeAt(0);
        if (keyCode > 64 && keyCode < 91) {
          result += String.fromCharCode(65 + ((chCode + keyCode) % 26));
        }
        if (i >= key.length) {
          i = 0;
        }
      } else {
        result += char;
      }
    })

    return (this.direct) ? result : result.split('').reverse();
  }
  decrypt(message, key) {
    if (arguments.length < 2) throw new Error('Error!');

    let messUp = message.toUpperCase().split('');
    let keyUp = key.toUpperCase().split('');
    let result = '';

    let i = 0;

    messUp.map(char => {
      let chCode = char.charCodeAt(0);
      if (chCode > 64 && chCode < 91) {
        let keyCode = keyUp[i++].charCodeAt(0);
        if (keyCode > 64 && keyCode < 91) {
          result += String.fromCharCode(65 + ((chCode - keyCode + 26) % 26));
        }
        if (i >= key.length) {
          i = 0;
        }
      } else {
        result += char;
      }
    })

    return (this.direct) ? result : result.split('').reverse();
  }
}

module.exports = VigenereCipheringMachine;