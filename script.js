document.addEventListener('DOMContentLoaded', () => {
    loadStartDate();
    loadCounts();
});

function setStartDate() {
    const startDate = document.getElementById('startDate').value;
    localStorage.setItem('startDate', startDate);
    loadStartDate(); // Call loadStartDate to update the display immediately
}

function loadStartDate() {
    const storedDate = localStorage.getItem('startDate');
    if (storedDate) {
        document.getElementById('startDate').value = storedDate;
    }
}


function increment(behavior) {
    let count = localStorage.getItem(behavior) || 0;
    count++;
    localStorage.setItem(behavior, count);
    updateDisplay(behavior);
}
function decrement(behavior) {
    let count = localStorage.getItem(behavior) || 0;
    count = Math.max(count - 1, 0); // Ensure count doesn't go below 0
    localStorage.setItem(behavior, count);
    updateDisplay(behavior);
}


function loadCounts() {
    updateDisplay('cursing');
    updateDisplay('drugs');
    updateDisplay('backhanded');
}

function updateDisplay(behavior) {
    const count = localStorage.getItem(behavior) || 0;
    document.getElementById(behavior + 'Count').innerText = count;

    // Update progress bar
    const progressBar = document.getElementById(behavior + 'Progress');
    const progressText = progressBar.querySelector('span');
    const progress = Math.min(count, 100); // assuming 100 is the max value for full progress
    progressBar.style.width = progress + '%';
    progressText.textContent = progress + '%'; // Centered text inside the span
}

