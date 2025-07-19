// ---------- Elements ----------
const assignedCountEl = document.getElementById("assignedCount");
const completedCountEl = document.getElementById("completedCount");
const activityLog = document.getElementById("activityLog");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const completeButtons = document.querySelectorAll(".complete-btn");

// ---------- On Page Load ----------
window.addEventListener("DOMContentLoaded", function () {
  const savedAssigned = localStorage.getItem("assignedCount");
  const savedCompleted = localStorage.getItem("completedCount");
  if (savedAssigned !== null) assignedCountEl.textContent = savedAssigned;
  if (savedCompleted !== null) completedCountEl.textContent = savedCompleted;

  const savedLogs = JSON.parse(localStorage.getItem("activityLogs")) || [];
  savedLogs.forEach((msg) => {
    const logItem = document.createElement("div");
    logItem.textContent = msg;
    logItem.className = "bg-[#F4F7FF] rounded-lg p-3 mb-2";
    activityLog.appendChild(logItem);
  });
});

// ---------- Helpers ----------
function updateCountsInLocalStorage(assigned, completed) {
  localStorage.setItem("assignedCount", assigned);
  localStorage.setItem("completedCount", completed);
}

function saveLogToLocalStorage(message) {
  const logs = JSON.parse(localStorage.getItem("activityLogs")) || [];
  logs.unshift(message);
  localStorage.setItem("activityLogs", JSON.stringify(logs));
}

// ---------- Task Button Click ----------
completeButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    alert("Board Update successfully!!");

    // Update counts
    let assigned = parseInt(assignedCountEl.textContent);
    let completed = parseInt(completedCountEl.textContent);

    if (assigned > 0) {
      assigned--;
      completed++;
      assignedCountEl.textContent = assigned;
      completedCountEl.textContent = completed;
      updateCountsInLocalStorage(assigned, completed);
    }

    // Disable button
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");

    // Get task title
    const taskTitle = btn.closest(".rounded-xl")?.querySelector("h3")?.textContent.trim() || "Unknown Task";

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Create log message
    const message = `You have completed the task "${taskTitle}" at ${timeString}.`;

    // Show message
    const logItem = document.createElement("div");
    logItem.textContent = message;
    logItem.className = "bg-[#F4F7FF] rounded-lg p-3 mb-2";
    activityLog.prepend(logItem);

    // Save message
    saveLogToLocalStorage(message);

    // ✅ If last card clicked, show congrats
    if (index === completeButtons.length - 1) {
      setTimeout(() => {
        alert("Congrats!! You have completed all the current task");
      }, 50);
    }
  });
});

// ---------- Clear History ----------
clearHistoryBtn.addEventListener("click", function () {
  activityLog.innerHTML = "";
  localStorage.removeItem("activityLogs");

  // ✅ Reset counts to original
  const originalAssigned = 6;
  const originalCompleted = 23;
  assignedCountEl.textContent = originalAssigned;
  completedCountEl.textContent = originalCompleted;
  updateCountsInLocalStorage(originalAssigned, originalCompleted);
});

