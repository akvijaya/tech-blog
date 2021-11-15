
$(".saveBtn").on("click", function () {
    var text = $(this).siblings("#value").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});

function showDate (){
    $("#currentDay").text (moment().format("dddd, MMMM, Do"));
};

function hourbyhourDisplay() {

    var currentBlock = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < currentBlock) {
            $(this).addClass("past");
        }
        else if (timeBlock === currentBlock) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
};

setInterval(function(){ 
    hourbyhourDisplay(); 
    showDate();
}, 60000);

function loadPlanner(){
    $("#9AM #value").val(localStorage.getItem("9AM"));
    $("#10AM #value").val(localStorage.getItem("10AM"));
    $("#11AM #value").val(localStorage.getItem("11AM"));
    $("#12PM #value").val(localStorage.getItem("12PM"));
    $("#1PM #value").val(localStorage.getItem("1PM"));
    $("#2PM #value").val(localStorage.getItem("2PM"));
    $("#3PM #value").val(localStorage.getItem("3PM"));
    $("#4PM #value").val(localStorage.getItem("4PM"));
    $("#5PM #value").val(localStorage.getItem("5PM"));
};

hourbyhourDisplay();

showDate();

loadPlanner();


