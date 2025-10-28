const currentYear = () => {
    const year = new Date().getFullYear();
    const current_year = document.getElementById('current-year')
    current_year.textContent = year
}

const getTime = () => {
    const time = new Date().getHours()
    const setTime = document.getElementById('time')
    time >= 6 && time <= 14 ? setTime.classList.add('open') : setTime.classList.add('closed')
    return time
}

export { currentYear, getTime }