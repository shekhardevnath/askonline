document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.title').addEventListener('mouseenter', function (event) {
        event.target.style.color = "orange";
    });

    document.querySelector('.title').addEventListener('mouseout', function (event) {
        event.target.style.color = "";
    });
});
