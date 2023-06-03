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
const tabContactMe = $("#contact-me")

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
tabContactMe.on('click', () => {
    navigationPanel.removeClass('nav-visible');
    navigationPanel.addClass('nav-invisible');
});

const btnSubmit = $("#btn-submit");

const txtName = $("#input-name");
const txtEmail = $("#input-email");
const txtContact = $("#input-contact");
const txtHeader = $("#input-message-header");
const txtMessage = $("#input-message");

const btnReset = $("#btn-reset");

const successToast = $("#success-toast .toast");
const failedToast = $("#failed-toast .toast");

btnSubmit.on('click', () => {
    if (txtName.val().trim() == "" || txtEmail.val().trim() == "" || txtContact.val().trim() == "" || txtHeader.val().trim() == "" || txtMessage.val().trim() == ""){
        $("#failed-toast").removeClass('d-none');
        failedToast.show();
        $("html").css("scroll-snap-type","y mandatory");
        $("body").css("scroll-snap-type","y mandatory");
        setTimeout(() => {
            failedToast.hide();
            $("#failed-toast").addClass('d-none');
        },2500);
    }
    else {
        emailjs.send("service_09kzwa7","template_suzib2e",{
            from_name: txtName.val().trim(),
            from_email: txtEmail.val().trim(),
            from_contact: txtContact.val().trim(),
            from_header: txtHeader.val().trim(),
            from_message: txtMessage.val().trim(),
        }).then(function (response) {
            if (response.status === 200){
                $("#success-toast").removeClass('d-none');
                successToast.show();
                $("html").css("scroll-snap-type","y mandatory");
                $("body").css("scroll-snap-type","y mandatory");
                setTimeout(() => {
                    successToast.hide();
                    $("#success-toast").addClass('d-none');
                },2500);
                btnReset.trigger('click');
            }
        });
    }
});
btnReset.on('click', () => {
    txtName.val("");
    txtEmail.val("");
    txtContact.val("");
    txtHeader.val("");
    txtMessage.val("");
});
txtName.on('input', () => {
    $("html").css("scroll-snap-type","none");
    $("body").css("scroll-snap-type","none");
});
txtEmail.on('input', () => {
    $("html").css("scroll-snap-type","none");
    $("body").css("scroll-snap-type","none");
});
txtContact.on('input', () => {
    $("html").css("scroll-snap-type","none");
    $("body").css("scroll-snap-type","none");
});
txtHeader.on('input', () => {
    $("html").css("scroll-snap-type","none");
    $("body").css("scroll-snap-type","none");
});
txtMessage.on('input', () => {
    $("html").css("scroll-snap-type","none");
    $("body").css("scroll-snap-type","none");
});
$(window).on('wheel', () => {
    $("html").css("scroll-snap-type","y mandatory");
    $("body").css("scroll-snap-type","y mandatory");
});
$(document).on('click', () => {
    $("html").css("scroll-snap-type","y mandatory");
    $("body").css("scroll-snap-type","y mandatory");
});