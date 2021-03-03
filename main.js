let milliSeconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

$(document).ready(function () {
    let timer = 0;

    //スタートボタン
    $("#start").click(function () {

        timer = setInterval("countUp()", 100);

        $(this).prop('disabled', true);
        $('#stop').prop('disabled', false);
        $('#reset').prop('disabled', false);
    });

    //ストップボタン
    $("#stop").click(function () {
        //（一時）停止
        clearInterval(timer);

        $(this).prop('disabled', true);
        $('#start').prop('disabled', false);
        $('#reset').prop('disabled', false);
    });

    //リセットボタン
    $("#reset").click(function () {
        milliSeconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;

        //0:0:0:0にリセット
        showTimer();
        clearInterval(timer);

        $(this).prop('disabaled', true);
        $('#start').prop('disabled', false);
        $('#stop').prop('disabled', true);
        $('#reset').prop('disabled', true);
    });
});

function countUp() {
    milliSeconds += 1;
    showTimer();
}

function showTimer() {

    if (milliSeconds > 9) {
        milliSeconds = 0;
        seconds += 1;
    }

    if (seconds > 59) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes > 59) {
        minutes = 0;
        hours += 1;
    }

    //ミリ秒
    msecNumber = milliSeconds;

    //秒
    if (seconds < 10) {
        secNumber = seconds.toString();
    } else {
        secNumber = seconds;
    }

    //分
    if (minutes < 10) {
        minNumber = minutes.toString();
    } else {
        minNumber = minutes;
    }

    //時
    if (hours < 10) {
        hourNumber = hours.toString();
    } else {
        hourNumber = hours;
    }

    $('#hours').html(hourNumber);
    $('#minutes').html(minNumber);
    $('#seconds').html(secNumber);
    $('#milliSeconds').html(msecNumber);
}