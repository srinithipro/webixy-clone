$(document).ready(function()
{
    $(".our-services").waypoint(function()
    {
        $(".our-services").addClass("animate__animated animate__fadeInUp");
    },
    { offset:"80%"});

    $(".card").waypoint(function()
    {
        $(".card").addClass("animate__animated animate__fadeInUp");
    },
    { offset:"80%"});

    $(".image-left img").waypoint(function()
    {
        $(".image-left img").addClass("animate__animated animate__fadeInLeft");
    },
    { offset:"80%"});

    $(".txt").waypoint(function()
    {
        $(".txt").addClass("animate__animated animate__fadeInRight");
    },
    { offset:"80%"});

    $(".txt1").waypoint(function()
    {
        $(".txt1").addClass("animate__animated animate__fadeInLeft");
    },
    { offset:"80%"});

    $(".study").waypoint(function()
    {
        $(".study").addClass("animate__animated animate__fadeInUp");
    },
    { offset:"80%"});

    $(".box").waypoint(function()
    {
        $(".box").addClass("animate__animated animate__fadeInUp");
    },
    { offset:"80%"});
});





