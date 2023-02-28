
flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});

const refs = {
    date: document.querySelector('#datetime-picker'),
    start: document.querySelector('[data-start]')
}
refs.start.setAttribute("disabled", "")

