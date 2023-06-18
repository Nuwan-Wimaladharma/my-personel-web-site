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

/*Animations*/

const page1 = $("#page-1");

const firstName = $("#first-name");
const lastName = $("#last-name");
const fullName = $("#full-name");
const role = $("#role");
const description = $("#description");
const mobileDescription = $("#mobile-text");
const skill1 = $("#programming-languages");
const skill2 = $("#front-end-tools");
const skill3 = $("#back-end-tools");
const skill4 = $("#database-management");
const skill5 = $("#software-development-tools");
const skill6 = $("#soft-skills");

const project1 = $("#first-project > div");
const project2 = $("#second-project > div");
const project3 = $("#third-project > div");
const project4 = $("#fourth-project > div");
const project5 = $("#fifth-project > div");
const project6 = $("#sixth-project > div");

page1.on('click', () => {
    console.log($(window).scrollTop.valueOf());
    firstName.addClass('animate__fadeInDown');
});

$(document).ready(function(){
    $(window).scroll(function (event) {
        firstName.removeClass('animate__fadeInDown');
        lastName.removeClass('animate__fadeInDown');
        fullName.removeClass('animate__fadeInDown');
        role.removeClass('animate__fadeInLeft');
        description.removeClass('animate__fadeInUp');
        mobileDescription.removeClass('animate__fadeInUp');

        skill1.removeClass('animate__zoomIn');
        skill2.removeClass('animate__zoomIn animate__delay-1s');
        skill3.removeClass('animate__zoomIn animate__delay-1s');
        skill4.removeClass('animate__zoomIn animate__delay-1s');
        skill5.removeClass('animate__zoomIn animate__delay-1s');
        skill6.removeClass('animate__zoomIn animate__delay-1s');

        project1.removeClass('animate__zoomIn');
        project2.removeClass('animate__zoomIn animate__delay-1s');
        project3.removeClass('animate__zoomIn animate__delay-1s');
        project4.removeClass('animate__zoomIn animate__delay-1s');
        project5.removeClass('animate__zoomIn animate__delay-1s');
        project6.removeClass('animate__zoomIn animate__delay-1s');
        const sc = $(window).scrollTop();

        setTimeout(() => {
            firstName.addClass('animate__fadeInDown');
            lastName.addClass('animate__fadeInDown');
            fullName.addClass('animate__fadeInDown');
            role.addClass('animate__fadeInLeft');
            description.addClass('animate__fadeInUp');
            mobileDescription.addClass('animate__fadeInUp');

            skill1.addClass('animate__zoomIn');
            skill2.addClass('animate__zoomIn animate animate__delay-1s');
            skill2.css('--animate-delay','0.2s');
            skill3.addClass('animate__zoomIn animate animate__delay-1s');
            skill3.css('--animate-delay','0.3s');
            skill4.addClass('animate__zoomIn animate animate__delay-1s');
            skill4.css('--animate-delay','0.4s');
            skill5.addClass('animate__zoomIn animate animate__delay-1s');
            skill5.css('--animate-delay','0.5s');
            skill6.addClass('animate__zoomIn animate animate__delay-1s');
            skill6.css('--animate-delay','0.6s');

            project1.addClass('animate__zoomIn');
            project2.addClass('animate__zoomIn animate animate__delay-1s');
            project2.css('--animate-delay','0.2s');
            project3.addClass('animate__zoomIn animate animate__delay-1s');
            project3.css('--animate-delay','0.3s');
            project4.addClass('animate__zoomIn animate animate__delay-1s');
            project4.css('--animate-delay','0.4s');
            project5.addClass('animate__zoomIn animate animate__delay-1s');
            project5.css('--animate-delay','0.5s');
            project6.addClass('animate__zoomIn animate animate__delay-1s');
            project6.css('--animate-delay','0.6s');
        },0);
    });
})