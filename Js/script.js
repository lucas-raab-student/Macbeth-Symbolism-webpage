
let hit=0;
const textObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    const bg=entry.target.getAttribute("data-color")
    const txt=entry.target.getAttribute("data-text")
    const msg= entry.target.getAttribute("data-message")
  
      changeColors(bg,txt)
    
    }
  });
}, {
  root: null,
  // This triggers when the section is 20% visible from the top
  threshold: 0.2 
});
document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section);
function changeColors(bg, txt) {
    document.body.style.backgroundColor = bg;
    document.body.style.color = txt;
    console.log("Changing color")
}
triggers.forEach(trigger => textObserver.observe(trigger));
(function () {
    const originalLog = console.log;
    const logContainer = document.getElementById('log-output');

    console.log = function (...args) {
        // 1. Still log to the real console (so you don't lose it)
        originalLog.apply(console, args);

        // 2. Add the message to your HTML element
        const message = args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : arg
        ).join(' ');

        const logEntry = document.createElement('div');
        logEntry.textContent = `> ${message}`;
        logContainer.appendChild(logEntry);

        // Auto-scroll to the bottom
        const display = document.getElementById('console-display');
        display.scrollTop = display.scrollHeight;
    };
})();

})