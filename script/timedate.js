const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const today = new Date();

        const day = dayNames[today.getDay()];
        const date = today.getDate();
        const month = monthNames[today.getMonth()];
        const year = today.getFullYear();

        document.getElementById("day-text").textContent = day;
        document.getElementById("date-text").textContent = `${month} ${date} ${year}`;