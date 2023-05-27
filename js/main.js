const btnMenu = $("header div:last-child ion-icon");
const btnCloseMenu = $("nav div ion-icon");
const navigationPanel = $("nav");

btnMenu.on('click',() => {
    navigationPanel.removeClass('nav-invisible');
    navigationPanel.addClass('nav-visible');
});
btnCloseMenu.on('click', () => {
    navigationPanel.removeClass('nav-visible');
    navigationPanel.addClass('nav-invisible');
});

const tabAbout = $("#about");
const tabSkills = $("#skills");
const tabProjects = $("#projects");

tabAbout.on('click', () => {
    navigationPanel.removeClass('nav-visible');
    navigationPanel.addClass('nav-invisible');
});
tabSkills.on('click', () => {
    navigationPanel.removeClass('nav-visible');
    navigationPanel.addClass('nav-invisible');
});
tabProjects.on('click', () => {
    navigationPanel.removeClass('nav-visible');
    navigationPanel.addClass('nav-invisible');
});