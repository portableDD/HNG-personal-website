function updateTime() {
    const currentTimeUTC = new Date().toUTCString();
    console.log(currentTimeUTC)
    document.getElementById('currentTimeUTC').textContent = currentTimeUTC.split(' ')[4];
    document.getElementById('currentDay').textContent = currentTimeUTC.split(',')[0];
}
updateTime();
setInterval(updateTime, 1000);