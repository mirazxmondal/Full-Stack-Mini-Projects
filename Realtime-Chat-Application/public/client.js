const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

    // Wait for document to load
    document.addEventListener("DOMContentLoaded", function(event) {
        document.documentElement.setAttribute("data-theme", "light");
    
        // Get our button switcher
        var themeSwitcher = document.getElementById("theme-switcher");
    
        // When our button gets clicked
        themeSwitcher.onclick = function() {
          // Get the current selected theme, on the first run
          // it should be `light`
          var currentTheme = document.documentElement.getAttribute("data-theme");
    
          // Switch between `dark` and `light`
          var switchToTheme = currentTheme === "dark" ? "light" : "dark"
    
          // Set our currenet theme to the new one
          document.documentElement.setAttribute("data-theme", switchToTheme);
        }
      });
