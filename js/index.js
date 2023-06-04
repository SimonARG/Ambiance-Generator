$(document).ready(function(){

    let controlShow = false;
    let menuShow = false;
    let musicShow = false;
    let masterShow = false;

    $("audio").prop("volume", 0.2);

    $(".top").click(function() {

        if (controlShow == false) {
            $(".top").addClass("top-flip");
        }
        
        if (controlShow == true) {
            $(".top").removeClass("top-flip");
        }

        if (menuShow == true || musicShow == true || masterShow == true) {
            $(".menu-container").hide("slide", {direction: "left"}, 200);
            menuShow = false;
            $(".music-container").hide("slide", {direction: "right"}, 200);
            musicShow = false;
            $(".master-container").hide("slide", {direction: "down"}, 200);
            masterShow = false;
            $(".control-container").delay(200).show("slide", {direction: "up"}, 200);
            controlShow = true;
            $(".left").removeClass("left-flip");
            $(".right").removeClass("right-flip");
            $(".bot").removeClass("bot-flip");
            return;
        }
        
        if (controlShow == false) {
            $(".control-container").show("slide", {direction: "up"}, 200);
            controlShow = true;
            return;
        }

        if (controlShow == true) {
            $(".control-container").hide("slide", {direction: "up"}, 200);
            controlShow = false;
            return;
        }
        
    });

    $(".left").click(function() {

        if (menuShow == false) {
            $(".left").addClass("left-flip");
        }
        
        if (menuShow == true) {
            $(".left").removeClass("left-flip");
        }

        if (controlShow == true || musicShow == true || masterShow == true) {
            $(".control-container").hide("slide", {direction: "up"}, 200);
            controlShow = false;
            $(".music-container").hide("slide", {direction: "right"}, 200);
            musicShow = false;
            $(".master-container").hide("slide", {direction: "down"}, 200);
            masterShow = false;
            $(".menu-container").delay(200).show("slide", {direction: "left"}, 200);
            menuShow = true;
            $(".top").removeClass("top-flip");
            $(".right").removeClass("right-flip");
            $(".bot").removeClass("bot-flip");
            return;
        }
        
        if (menuShow == false) {
            $(".menu-container").show("slide", {direction: "left"}, 200);
            menuShow = true;
            return;
        }

        if (menuShow == true) {
            $(".menu-container").hide("slide", {direction: "left"}, 200);
            menuShow = false;
            return;
        }

    });

    $(".right").click(function() {

        if (musicShow == false) {
            $(".right").addClass("right-flip");

        }
        
        if (musicShow == true) {
            $(".right").removeClass("right-flip");
        }

        if (controlShow == true || menuShow == true || masterShow == true) {
            $(".control-container").hide("slide", {direction: "up"}, 200);
            controlShow = false;
            $(".menu-container").hide("slide", {direction: "left"}, 200);
            menuShow = false;
            $(".master-container").hide("slide", {direction: "down"}, 200);
            masterShow = false;
            $(".music-container").delay(200).show("slide", {direction: "right"}, 200);
            musicShow = true;
            $(".left").removeClass("left-flip");
            $(".top").removeClass("top-flip");
            $(".bot").removeClass("bot-flip");
            return;
        }
        
        if (musicShow == false) {
            $(".music-container").show("slide", {direction: "right"}, 200);
            musicShow = true;
            return;
        }

        if (musicShow == true) {
            $(".music-container").hide("slide", {direction: "right"}, 200);
            musicShow = false;
            return;
        }

    });

    $(".bot").click(function() {

        if (masterShow == false) {
            $(".bot").addClass("bot-flip");
        }
        
        if (masterShow == true) {
            $(".bot").removeClass("bot-flip");
        }

        if (menuShow == true || musicShow == true || controlShow == true) {
            $(".menu-container").hide("slide", {direction: "left"}, 200);
            menuShow = false;
            $(".music-container").hide("slide", {direction: "right"}, 200);
            musicShow = false;
            $(".control-container").hide("slide", {direction: "up"}, 200);
            controlShow = false;
            $(".master-container").delay(200).show("slide", {direction: "down"}, 200);
            masterShow = true;
            $(".left").removeClass("left-flip");
            $(".right").removeClass("right-flip");
            $(".top").removeClass("top-flip");
            return;
        }
        
        if (masterShow == false) {
            $(".master-container").show("slide", {direction: "down"}, 200);
            masterShow = true;
            return;
        }

        if (masterShow == true) {
            $(".master-container").hide("slide", {direction: "down"}, 200);
            masterShow = false;
            return;
        }

    });

    $("audio").attr("src", "");
    
});

function onOff(audioId, btnId, displaySpanClass, onOffClass) {
    let audio = document.getElementById(audioId);
    let btn = document.getElementById(btnId);
    let icon = document.getElementsByClassName(onOffClass);
    let displaySpan = document.getElementsByClassName(displaySpanClass);
    let file = $(displaySpan).text();
    let playing = false;
    
    if ($(btn).hasClass("fa-pause")) {
        playing = true;
    } else {
        playing = false;
    }
    
    if (audio.getAttribute("src") != "") {
        if (playing == false) {
            audio.setAttribute("src", "");
            audio.load();
        } else {
            audio.pause();
            audio.setAttribute("src", "");
            audio.load();
        }
        $(icon).addClass("btn-inactive");
        $(btn).addClass("btn-inactive");
    } else {
        if (playing == false) {
            audio.setAttribute("src", "audio/" + file + ".opus");
            audio.load();
        } else {
            audio.setAttribute("src", "audio/" + file + ".opus");
            audio.load();
            audio.play();
        }
        $(icon).removeClass("btn-inactive");
        $(btn).removeClass("btn-inactive");
    }
}

function pausePlay(audioId, iconId) {
    let audio = document.getElementById(audioId);
    let icon = document.getElementById(iconId); 

    if (audio.getAttribute("src") != "") {
        if (audio.paused) {
            audio.play();
            $(icon).removeClass("fa-play");
            $(icon).addClass("fa-pause");
        } else {
            audio.pause();
            $(icon).removeClass("fa-pause");
            $(icon).addClass("fa-play");
        }
    }
}

function masterPausePlay() {
    const icon = document.getElementById("master-icon");
    const audioNode = document.querySelectorAll("audio");
    const audios = [];

    console.log(singleIcon);
        
    for (let i = 0, len = audioNode.length; i < len; i++) {
        if (audioNode[i].getAttribute("src") != "") {
            audios.push(audioNode[i]);
            audios.sort();
        }
    }

    if (audios.every(item => item.paused) && audios.length != 0) {

        audios.forEach(element => {
            element.play()
        });

        $(icon).removeClass("fa-play");
        $(icon).addClass("fa-pause");
    } else if (audios.length != 0){

        audios.forEach(element => {
            element.pause()
        });

        $(icon).removeClass("fa-pause");
        $(icon).addClass("fa-play");
    }
}

function changeVolume(audioId, slider) {
    const audio = document.getElementById(audioId);
    const vol = (slider / 100);

    $(audio).prop("volume", vol);
}

function stopYoutube() {
    if (youtubePlay = true) {
        const youtubeEmbedWindow = document.querySelector('iframe[src*="youtube.com/"]').contentWindow;
        youtubeEmbedWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        youtubePlay = false;
    }
}

function stopSpotify() {
    if (spotifyPlay = true) {
        $("#spotify-player").hide();
        const spotifyEmbedWindow = document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow;
        spotifyEmbedWindow.postMessage({command: 'toggle'}, '*');
        spotifyPlay = false;
    }
}

function embedMusic() {
    const musicUrl = document.getElementById("link").value;
    let spotifyPlay = false;
    let youtubePlay = false;
    
    if (musicUrl.length < 54 && musicUrl.includes("youtube")) {
        const videoId = musicUrl.slice(32);
        const videoUrl = "https://www.youtube.com/embed/" + videoId + "?playlist=" + videoId + "&loop=1" + "&enablejsapi=1";
        $("#youtube-player").show();
        $("#youtube-player").attr("src", videoUrl);
        youtubePlay = true;
        stopSpotify();
    } else if (musicUrl.length < 54 && musicUrl.includes("spotify")) {
        const songId = musicUrl.slice(31);
        const songUrl = "https://open.spotify.com/embed/track/" + songId + "?utm_source=generator";
        $("#youtube-player").hide();
        $("#spotify-player").show();
        $("#spotify-player").attr("src", songUrl);
        spotifyPlay = true;
        stopYoutube();
    } else if (musicUrl.length > 54 && musicUrl.includes("youtube")) {
        const playlistId = musicUrl.slice(38);
        const playlistUrl = "https://www.youtube.com/embed?listType=playlist&list=" + playlistId + "&loop=1" + "&enablejsapi=1";
        $("#youtube-player").show();
        $("#youtube-player").attr("src", playlistUrl);
        youtubePlay = true;
        stopSpotify();
    } else if (musicUrl.length > 54 && musicUrl.includes("spotify")) {
        const playlistId = musicUrl.slice(34);
        const playlistUrl = "https://open.spotify.com/embed/playlist/" + playlistId + "?utm_source=generator";
        $("#youtube-player").hide();
        $("#spotify-player").show();
        $("#spotify-player").attr("src", playlistUrl);
        spotifyPlay = true;
        stopYoutube();
    }
}

function toggleSwitcher(switcherClass, arrowClass) {
    let switcher = document.getElementsByClassName(switcherClass);
    let arrow = document.getElementsByClassName(arrowClass);
    
    if ($(switcher).is(':hidden')) {
        $(switcher).show("slide", {direction: "up"}, 200);
        $(arrow).addClass("switcher-arrow-flip");
    } else {
        $(switcher).hide("slide", {direction: "up"}, 200);
        $(arrow).removeClass("switcher-arrow-flip");
    }
}

function switchAudio(audioFile, audioElement, switcherElement, displaySpan, displayIcon, iconClass) {
    let audio = document.getElementById(audioElement);
    let switcher = document.getElementsByClassName(switcherElement);
    let span = document.getElementsByClassName(displaySpan);
    let icon = document.getElementById(displayIcon);

    if (audio.paused) {
        $(audio).attr("src", "audio/" + audioFile + ".opus");
        $(".switcher-element").removeClass("switcher-active");
        $(switcher).addClass("switcher-active");
        $(span).text(audioFile);
        $(icon).removeClass().addClass(iconClass);
        audio.load();
    } else {
        audio.pause();
        $(audio).attr("src", "audio/" + audioFile + ".opus");
        $(".switcher-element").removeClass("switcher-active");
        $(switcher).addClass("switcher-active");
        $(span).text(audioFile);
        $(icon).removeClass().addClass(iconClass);
        audio.load();
        audio.oncanplaythrough = audio.play();
    }
}