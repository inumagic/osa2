// JavaScript functionality for Sleep Apnea Course

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-week]');
    const weekContents = document.querySelectorAll('.week-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            weekContents.forEach(content => {
                content.style.display = 'none';
            });

            const weekId = button.getAttribute('data-week');
            const weekContent = document.getElementById(weekId);

            if (weekContent) {
                weekContent.style.display = 'block';
            }
        });
    });
});