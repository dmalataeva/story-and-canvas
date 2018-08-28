const {Howl, Howler} = require('howler');

const Audio = function() {};

Audio.waterwalk = new Howl({
    src: ['./../Brevyn_-_10_-_Waterwalk.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.5
});

Audio.initialize = function () {
    Audio.waterwalk.play();
};

Audio.mute = function () {
    Howler.mute(true);
};

Audio.unmute = function () {
    Howler.mute(false);
};

module.exports = Audio;

$("#title").mouseenter(
    function() {
        $("#title").animate({opacity: 0}, "slow", function() {$("#title").css("display", "none")});
    }
);

$(document).on("click", ".fa-volume-off",
    function() {
        Audio.unmute();
        $(".fa-volume-off").attr("class", "fas fa-volume-up volume");
    }
);

$(document).on("click", ".fa-volume-up",
    function() {
        Audio.mute();
        $(".fa-volume-up").attr("class", "fas fa-volume-off volume");
    }
);