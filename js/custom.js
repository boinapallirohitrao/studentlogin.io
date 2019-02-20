
    var startDate, endDate, startInstance, endInstance;
    var fillInputs = function () {
        startInstance.$elem.val(startDate ? startDate.locale(startInstance.config.format).format(startInstance.config.format) : "");
        endInstance.$elem.val(endDate ? endDate.locale(endInstance.config.format).format(endInstance.config.format) : "");
    };

    var startDate, endDate, startInstance, endInstance;
    var fillInputs = function () {
        startInstance.$elem.val(startDate ? startDate.locale(startInstance.config.format).format(startInstance.config.format) : "");
        endInstance.$elem.val(endDate ? endDate.locale(endInstance.config.format).format(endInstance.config.format) : "");
    };


    $("#hotelsStart").caleran({
        startEmpty: $("#hotelsStart").val() === "",
        startDate: $("#hotelsStart").val(),
        endDate: $("#hotelsEnd").val(),
        enableKeyboard: false,
        oninit: function (instance) {
            startInstance = instance;
            if (!instance.config.startEmpty && instance.config.startDate) {
                instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                startDate = instance.config.startDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onfirstselect: function (instance, start) {
            startDate = start.clone();
            startInstance.globals.startSelected = false;
            startInstance.hideDropdown();
            endInstance.showDropdown();
            endInstance.config.minDate = startDate.clone();
            endInstance.config.startDate = startDate.clone();
            endInstance.config.endDate = null;
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
            endInstance.globals.firstValueSelected = true;
            endInstance.setDisplayDate(start);
            if (endDate && startDate.isAfter(endDate)) {
                endInstance.globals.endDate = endDate.clone();
            }
            endInstance.updateHeader();
            endInstance.reDrawCells();
            fillInputs();
        }
    });
    $("#hotelsEnd").caleran({
        startEmpty: $("#hotelsEnd").val() === "",
        startDate: $("#hotelsStart").val(),
        endDate: $("#hotelsEnd").val(),
        enableKeyboard: false,
        autoCloseOnSelect: true,
        oninit: function (instance) {
            endInstance = instance;
            if (!instance.config.startEmpty && instance.config.endDate) {
                instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                endDate = instance.config.endDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onafterselect: function (instance, start, end) {
            startDate = start.clone();
            endDate = end.clone();
            endInstance.hideDropdown();
            startInstance.config.endDate = endDate.clone();
            startInstance.globals.firstValueSelected = true;
            fillInputs();
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
        }
    });




    $("#flightStart").caleran({
        startEmpty: $("#flightStart").val() === "",
        startDate: $("#flightStart").val(),
        endDate: $("#flightEnd").val(),
        showHeader: false,
        enableKeyboard: false,
        oninit: function (instance) {
            startInstance = instance;
            if (!instance.config.startEmpty && instance.config.startDate) {
                instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                startDate = instance.config.startDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onfirstselect: function (instance, start) {
            startDate = start.clone();
            startInstance.globals.startSelected = false;
            startInstance.hideDropdown();
            endInstance.showDropdown();
            endInstance.config.minDate = startDate.clone();
            endInstance.config.startDate = startDate.clone();
            endInstance.config.endDate = null;
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
            endInstance.globals.firstValueSelected = true;
            endInstance.setDisplayDate(start);
            if (endDate && startDate.isAfter(endDate)) {
                endInstance.globals.endDate = endDate.clone();
            }
            endInstance.updateHeader();
            endInstance.reDrawCells();
            fillInputs();
        }
    });


    $("#flightEnd").caleran({
        startEmpty: $("#flightEnd").val() === "",
        startDate: $("#flightStart").val(),
        endDate: $("#flightEnd").val(),
        enableKeyboard: false,
        showHeader: false,
        autoCloseOnSelect: true,
        oninit: function (instance) {
            endInstance = instance;
            if (!instance.config.startEmpty && instance.config.endDate) {
                instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                endDate = instance.config.endDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onafterselect: function (instance, start, end) {
            startDate = start.clone();
            endDate = end.clone();
            endInstance.hideDropdown();
            startInstance.config.endDate = endDate.clone();
            startInstance.globals.firstValueSelected = true;
            fillInputs();
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
        }
    });





// tabs active     
$(".search-step").click(function(){
    $('.search-step.active').removeClass('active');
    $(this).addClass('active');
});
$(".tripsTab ul li").click(function(){
    $('.tripsTab ul li.active').removeClass('active');
    $(this).addClass('active');
});

// hide the calendar
$('#oneTrip').on('click', function(){
    $('#twoWay').hide();
    // $('#oneWay input').removeClass('caleran-ex-6-5-start');
    // $('#oneWay input').addClass('caleran-ex-6-2');
    // $(".caleran-ex-6-2").caleran({
    //     singleDate: true,
    //     calendarCount: 1,
    //     showHeader: false,
    //     showFooter: false,
    //     autoCloseOnSelect: true
    //   });  
});
$('#roundTrip').on('click', function(){
    $('#twoWay').show();
    // $('#oneWay input').removeClass('caleran-ex-6-2');
    // $('#oneWay input').addClass('caleran-ex-6-5-start');
});

$('.dropdown-menu li').on('click', function() {
  var getValue = $(this).text();
  $('.dropdown-select').text(getValue);
});


$('input, select').focus(function(){
    console.log('There')
    $(this).next( "span.arrow" ).addClass( "rotate" );  
});
$('input, select').focusout(function(){
    console.log('There')
    $(this).next( "span.arrow" ).removeClass( "rotate" );  
});

$('input, select').keyup(function(){
    $(this).next('span.error').hide();
});





$('#media').carousel({
    pause: true,
    interval: false,
  });






// deep link url for flights

$( "#flightSubmit a.findBtn" ).on('click',function() {
            var from = $('#startPoint input').val().split("-");
            var to = $('#fromPoint input').val().split("-");
            var adult = $( "#adult_r option:selected" ).val();
            var child = $( "#child_r option:selected" ).val();
            var infant = $( "#infant_r option:selected" ).val();
            var cabin = $( "#cabin_r option:selected" ).val();

            var oneWayDepart = '26-Feb-2019';


            var towWayDepart = '27-Feb-2019';


            if(from == '' || to == ''){
                $('#startPoint input').after('<span class="error">Please select the origin</span>');
                $('#fromPoint input').after('<span class="error">Please select the departure</span>');
                return false;
            }

            if(towWayDepart == ''){
                var link = "https://www.skybooker.com/search-flights/?from=" + from[1] + "&to=" + to[1] + "&depart=" + oneWayDepart + "&adult=" + adult + "&child=" + child + "&infant=" + infant + "&cabin=" + cabin

            }else{
                var link = "https://www.skybooker.com/search-flights/?from=" + from[1] + "&to=" + to[1] + "&depart=" + oneWayDepart + "," + towWayDepart + "&adult=" + adult + "&child=" + child + "&infant=" + infant + "&cabin=" + cabin
            }


            // https://bookingbuddy.goway.com/flights/?from=PAR,HYD&to=HYD,DEL&depart=14-Feb-2019,19-Feb-2019,20-Feb-2019,21-Feb-2019&adult=1&child=0&infant=0&cabin=economy&flexible=false

            $(location).attr('href', link);
});



