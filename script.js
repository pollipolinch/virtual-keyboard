const keys = [
    { keyCode: 'Backquote', class: "Backquote", keyEn: "§", keyRu: ">" },
    { keyCode: 'Digit1', class: "Digit1", keyEn: 1, keyRu: '!' },
    { keyCode: 'Digit2', class: "Digit2", keyEn: 2, keyRu: '@' },
    { keyCode: 'Digit3', class: "Digit3", keyEn: 3, keyRu: '#' },
    { keyCode: 'Digit4', class: "Digit4", keyEn: 4, keyRu: '$' },
    { keyCode: 'Digit5', class: "Digit5", keyEn: 5, keyRu: '%' },
    { keyCode: 'Digit6', class: "Digit6", keyEn: 6, keyRu: '^' },
    { keyCode: 'Digit7', class: "Digit7", keyEn: 7, keyRu: '&' },
    { keyCode: 'Digit8', class: "Digit8", keyEn: 8, keyRu: '*' },
    { keyCode: 'Digit9', class: "Digit9", keyEn: 9, keyRu: '(' },
    { keyCode: 'Digit0', class: "Digit0", keyEn: 0, keyRu: ')' },
    { keyCode: 'Minus', class: "Minus", keyEn: "-", keyRu: "-" },
    { keyCode: 'Equal', class: "Equal", keyEn: "=", keyRu: "=" },
    { keyCode: 'Backspace', class: "Backspace key-big", keyEn: "Backspace", keyRu: "Backspace" },
    { keyCode: 'Tab', class: "Tab key-big", keyEn: "Tab", keyRu: "Tab" },
    { keyCode: 'KeyQ', class: "KeyQ", keyEn: "q", keyRu: "й" },
    { keyCode: 'KeyW', class: "KeyW", keyEn: "w", keyRu: "ц" },
    { keyCode: 'KeyE', class: "KeyE", keyEn: "e", keyRu: "у" },
    { keyCode: 'KeyR', class: "KeyR", keyEn: "r", keyRu: "к" },
    { keyCode: 'KeyT', class: "KeyT", keyEn: "t", keyRu: "е" },
    { keyCode: 'KeyY', class: "KeyY", keyEn: "y", keyRu: "н" },
    { keyCode: 'KeyU', class: "KeyU", keyEn: "u", keyRu: "г" },
    { keyCode: 'KeyI', class: "KeyI", keyEn: "i", keyRu: "ш" },
    { keyCode: 'KeyO', class: "KeyO", keyEn: "o", keyRu: "щ" },
    { keyCode: 'KeyP', class: "KeyP", keyEn: "p", keyRu: "з" },
    { keyCode: 'BracketLeft', class: "BracketLeft", keyEn: "[", keyRu: "х" },
    { keyCode: 'BracketRight', class: "BracketRight", keyEn: "]", keyRu: "ъ" },
    { keyCode: 'Enter', class: "Enter key-big", keyEn: "Enter", keyRu: "Enter" },
    { keyCode: 'CapsLock', class: "CapsLock key-big-2", keyEn: "CapsLock", keyRu: "CapsLock" },
    { keyCode: 'KeyA', class: "KeyA", keyEn: "a", keyRu: "ф" },
    { keyCode: 'KeyS', class: "KeyS", keyEn: "s", keyRu: "ы" },
    { keyCode: 'KeyD', class: "KeyD", keyEn: "d", keyRu: "в" },
    { keyCode: 'KeyF', class: "KeyF", keyEn: "f", keyRu: "а" },
    { keyCode: 'KeyG', class: "KeyG", keyEn: "g", keyRu: "п" },
    { keyCode: 'KeyH', class: "KeyH", keyEn: "h", keyRu: "р" },
    { keyCode: 'KeyJ', class: "KeyJ", keyEn: "j", keyRu: "о" },
    { keyCode: 'KeyK', class: "KeyK", keyEn: "k", keyRu: "л" },
    { keyCode: 'KeyL', class: "KeyL", keyEn: "l", keyRu: "д" },
    { keyCode: 'Semicolon', class: "Semicolon", keyEn: ";", keyRu: "ж" },
    { keyCode: 'Quote', class: "Quote", keyEn: "'", keyRu: "э" },
    { keyCode: 'Backslash', class: "Backslash", keyEn: '\\', keyRu: "ё" },
    { keyCode: 'ShiftLeft', class: "ShiftLeft key-big-2", keyEn: "Shift", keyRu: "Shift" },
    { keyCode: 'IntlBackslash', class: "IntlBackslash", keyEn: '`', keyRu: "]" },
    { keyCode: 'KeyZ', class: "KeyZ", keyEn: "z", keyRu: "я" },
    { keyCode: 'KeyX', class: "KeyX", keyEn: "x", keyRu: "ч" },
    { keyCode: 'KeyC', class: "KeyC", keyEn: "c", keyRu: "с" },
    { keyCode: 'KeyV', class: "KeyV", keyEn: "v", keyRu: "м" },
    { keyCode: 'KeyB', class: "KeyB", keyEn: "b", keyRu: "и" },
    { keyCode: 'KeyN', class: "KeyN", keyEn: "n", keyRu: "т" },
    { keyCode: 'KeyM', class: "KeyM", keyEn: "m", keyRu: "ь" },
    { keyCode: 'Comma', class: "Comma", keyEn: ",", keyRu: "б" },
    { keyCode: 'Period', class: "Period", keyEn: ".", keyRu: "ю" },
    { keyCode: 'Slash', class: "Slash", keyEn: "/", keyRu: "/" },
    { keyCode: 'ArrowUp', class: "ArrowUp", keyEn: "&uarr;", keyRu: "&uarr;" },
    { keyCode: 'ShiftRight', class: "ShiftRight key-big", keyEn: "Shift", keyRu: "Shift" },
    { keyCode: 'ControlLeft', class: "ControlLeft key-big", keyEn: "Ctrl", keyRu: "Ctrl" },
    { keyCode: 'AltLeft', class: "AltLeft", keyEn: "Alt", keyRu: "Alt" },
    { keyCode: 'MetaLeft', class: "MetaLeft", keyEn: "cmd", keyRu: "cmd" },
    { keyCode: 'Space', class: "Space key-space", keyEn: " ", keyRu: " " },
    { keyCode: 'MetaRight', class: "MetaRight", keyEn: "cmd", keyRu: "cmd" },
    { keyCode: 'AltRight', class: "AltRight", keyEn: "Alt", keyRu: "Alt" },
    { keyCode: 'ArrowLeft', class: "ArrowLeft", keyEn: "&larr;", keyRu: "&larr;" },
    { keyCode: 'ArrowDown', class: "ArrowDown", keyEn: "&darr;", keyRu: "&darr;" },
    { keyCode: 'ArrowRight', class: "ArrowRight", keyEn: "&rarr;", keyRu: "&rarr;" },
];

window.addEventListener("load", () => {
    body.innerHTML = ""
    body.innerHTML = `
          <div class="project">
              <h1 class="project-title">Virtual keyboard</h1>
              <textarea class="project-textarea" id="textarea" disabled="true"></textarea>
              <div class="project-keyboard" id="keyboard"></div>
              <div class="project-description">
                  Клавиатура создана в операционной системе macOS<br/>
                  Для переключения языка: левые Alt + Cmd
              </div>
              <p>ссылка на pull request</p>
              <a href="" target="_blank">            

              </a>
          </div>    
      `;

    loadBody();

});

