$(document).ready(function() {
    var containerMenu = $(this);

    var dropdownBtn = containerMenu.find('.dropdown-btn');
    dropdownBtn.click(function() {
        var dropdownContent = containerMenu.find('.dropdown-content');
        dropdownContent.slideToggle(100);
    })

    //close dropdown when click outside but now not working
    $(document).click(function (e) {
        var dropdown = containerMenu.find('.dropdown');
        // if (e.target != dropdown) {
        //      var isopened = containerMenu.find('.dropdown-content').css("display");

        //      if (isopened == 'block') {
        //         containerMenu.find('.dropdown-content').slideToggle(100);
        //      }
        // }
    });
})


