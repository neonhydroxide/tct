RecReading=true
let e = campaignTrail_temp;
e.collect_results = true;
campaignTrail_temp.election_json = [{
	"model": "campaign_trail.election", 
	"pk": 4, 
	"fields": {
		"year": 1016, 
		"summary": "<div id='scrollingElement' style='overflow-y:scroll;height:200px;text-align:center;font-size:20pt;background-color: #000000;'><br><br><p style='color:#00D7EC'><b>A long time ago in a galaxy far, far away....</p><br><br><br><br><p style='color:#F2B61A'>Election of 16ABY</p><p style='color:#F2B61A;font-size:26pt'>THE REPUBLIC REBORN</p><br><p style='color:#F2B61A'>The evil GALACTIC EMPIRE is now over a decade dead, and the imperial warlords who rose in its place have been all but defeated.</p><br><p style='color:#F2B61A'>CHANCELLOR ORGANA, elected overwhelmingly after Mon Mothma's retirement in 11ABY, now has the opportunity to reshape galactic institutions and bring an era of peace and prosperity.</p><br><p style='color:#F2B61A'>But all is not well. Threats linger - both in the far reaches of the galaxy and within the halls of the GALACTIC SENATE itself.....</p><p><br><br><br><br><br><br></b></div><script>var scrollingElement = document.getElementById('scrollingElement'); var scrollSpeed = 40; var scrollInterval; function scrollToBottom() { if (scrollingElement.scrollHeight - scrollingElement.scrollTop === scrollingElement.clientHeight) { clearInterval(scrollInterval); } else { scrollingElement.scrollTop += 1; } } setTimeout(function() { if (!scrollInterval) { scrollInterval = setInterval(scrollToBottom, scrollSpeed); } }, 2000) </script>", 
		"image_url": "https://i.imgur.com/Gs1IlpA.png", 
		"winning_electoral_vote_number": 3104,
		"advisor_url": "https://i.imgur.com/dynul9H.png", 
		"recommended_reading": "<div style='overflow-y:scroll;height:370px;'><p>Thank you for playing 16ABY! <br><br>You are playing a beta version. I am a one-person team and while I try to play through every scenario to make sure everything works OK, I can't catch everything. I also haven't read the books this period of Star Wars history is based on for nearly a decade, so let me know if there are any contradictions or anything else which should be changed. If you notice anything odd, either as a bug, a balance issue, or a point where the narrative doesn't seem to make sense, please contact me on Reddit by commenting on my post!<br><br>Currently known bugs: sometimes the 'other' Senate vote will be negative. I suspect this has something to do with the way the proportional vote is calculated but I can't figure out how to get rid of it. Also, sometimes the 'results by state' and 'overall results details' won't open in the case of certain landslides. If someone knows why these things happen, please let me know!<p><p>For more information, please see:<p><p><a href='https://starwars.fandom.com/wiki/The_Black_Fleet_Crisis'>The Black Fleet Crisis</a> by Michael P. Kube-McDowell<p><p><a href='https://www.reddit.com/user/NeonHydroxide/comments/166il4s/the_galactic_election_of_10167_as_published_in/'>The Galactic Election of 1016-7, as published in the Galactic Times of Alarosa</a> by NeonHydroxide<p><img src='https://i.imgur.com/tIUUfby.png/' width='700px'></img></div>",
		"has_visits": 0, 
		"no_electoral_majority_image": "https://i.imgur.com/QiQgzj6.png"
		}
	}, ]

campaignTrail_temp.candidate_json = [ {
	"model": "campaign_trail.candidate", 
	"pk": 23, 
	"fields": {
		"first_name": "Leia", 
		"last_name": "Organa", 
		"election": 4, 
		"party": "Pro-Administration", 
		"state": "Alderaan", 
		"priority": 1, 
		"description": "<p>Adopted daughter of one of the founders of the Rebellion, Leia Organa was seemingly born to leadership. She was only sixteen when she started running missions for the Alliance and only nineteen when she saw her planet destroyed by the Empire. Taking her adoptive father's seat on the Alliance Council after his death, she made herself indispensible to Chairwoman (and later New Republic Chancellor) Mothma. After Mothma's resignation in 11ABY, Organa - then serving as Minister of State - won an overwhelming vote to succeed her as Chancellor.<br><br>The first few years of her term have not gone as planned. Constant crisis and war with the Imperial Remnants have made it near-impossible for her to advance any sort of domestic agenda. Now, though, as the conflict dies down, perhaps she will have a chance to <i>govern</i>, and not just lead.</p>", 
		"color_hex": "#AAAAAA", 
		"secondary_color_hex": "#AAAAAA", 
		"is_active": 1, 
		"image_url": "https://i.imgur.com/JOAcpo7.png", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": null, 
		"candidate_score": 1
		}
	},{
	"model": "campaign_trail.candidate",
	"pk": 24,
	"fields": {
		"first_name": "", 
		"last_name": "Rim Opposition", 
		"election": 4, 
		"party": "na", 
		"state": "na", 
		"priority": 1, 
		"description": "na", 
		"color_hex": "#151460", 
		"secondary_color_hex": "#151460", 
		"is_active": 0, 
		"image_url": "https://i.imgur.com/Cf5iBrL.png", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": null, 
		"candidate_score": 1
		}
	}, {
	"model": "campaign_trail.candidate",
	"pk": 25, 
	"fields": {
		"first_name": "", 
		"last_name": "Core Opposition", 
		"election": 4, 
		"party": "na ", 
		"state": "na", 
		"priority": 2, 
		"description": "na",
		"color_hex": "#880000", 
		"secondary_color_hex": "#880000", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": null, "candidate_score": 1.0
		}
	}, {
	"model": "campaign_trail.candidate",
	"pk": 26, 
	"fields": {
		"first_name": "na", 
		"last_name": "Administration", 
		"election": 4, 
		"party": "na", 
		"state": "na", 
		"priority": 2, 
		"description": "na", 
		"color_hex": "#e14545", 
		"secondary_color_hex": "#94E7FD", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": null, "candidate_score": 1.0
		}
	},  {
	"model": "campaign_trail.candidate",
	"pk": 27, 
	"fields": {
		"first_name": "Jared", 
		"last_name": "Polis (T)", 
		"election": 4, 
		"party": "Technocratic", 
		"state": "Kansas", 
		"priority": 2, 
		"description": "<h3>Not currently playable.</h3><p>n/a.</p>", 
		"color_hex": "#f89900", 
		"secondary_color_hex": "#94E7FD", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": null, "candidate_score": 1.0
		}
	},  
	//VPs below
	{
	"model": "campaign_trail.candidate", 
		"pk": 55, 
		"fields": {
			"first_name": "n/a", 
			"last_name": "Organa VP", 
			"election": 4, 
			"party": "n/a", 
			"state": "N/A", 
			"priority": 29, 
			"description": "n/a", 
			"color_hex": "#FF0000", 
			"secondary_color_hex": "#FFA0A0", 
			"is_active": 0, 
			"image_url": "https://i.imgur.com/MJVUMzM.png", 
			"electoral_victory_message": "n/a", 
			"electoral_loss_message": "n/a", 
			"no_electoral_majority_message": "n/a", 
			"description_as_running_mate": "<p>n/a</p>", 
			"candidate_score": 0.0
		}
	}, {
	"model": "campaign_trail.candidate", 
		"pk": 58, 
		"fields": {
			"first_name": "n/a", 
			"last_name": "Rim VP", 
			"election": 4, 
			"party": "n/a", 
			"state": "N/A", 
			"priority": 33, 
			"description": "n/a", 
			"color_hex": "#0000FF", 
			"secondary_color_hex": 
			"#90C0FF", 
			"is_active": 0, 
			"image_url": "https://i.imgur.com/lM5id0g.png", 
			"electoral_victory_message": "n/a", 
			"electoral_loss_message": "n/a", 
			"no_electoral_majority_message": "n/a", 
			"description_as_running_mate": "<p>n/a </p>", 
			"candidate_score": 0.0
		}
	}, {
	"model": "campaign_trail.candidate",
	"pk": 63, 
	"fields": {
		"first_name": "N/A.", 
		"last_name": "Core VP", 
		"election": 4, 
		"party": "n/a", 
		"state": "n/a", 
		"priority": 38, 
		"description": "n/a", 
		"color_hex": "#0000FF", 
		"secondary_color_hex": "#90C0FF", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": "n/a", 
		"candidate_score": 0.0
		}
	}, {
	"model": "campaign_trail.candidate",
	"pk": 64, 
	"fields": {
		"first_name": "N/A.", 
		"last_name": "N/A", 
		"election": 4, 
		"party": "n/a", 
		"state": "n/a", 
		"priority": 39, 
		"description": "n/a", 
		"color_hex": "#0000FF", 
		"secondary_color_hex": "#90C0FF", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": "n/a", 
		"candidate_score": 0.0
		}
	}, {
	"model": "campaign_trail.candidate",
	"pk": 65, 
	"fields": {
		"first_name": "N/A.", 
		"last_name": "N/A", 
		"election": 4, 
		"party": "n/a", 
		"state": "n/a", 
		"priority": 40, 
		"description": "n/a", 
		"color_hex": "#0000FF", 
		"secondary_color_hex": "#90C0FF", 
		"is_active": 0, 
		"image_url": "n/a", 
		"electoral_victory_message": "n/a", 
		"electoral_loss_message": "n/a", 
		"no_electoral_majority_message": "n/a", 
		"description_as_running_mate": "n/a", 
		"candidate_score": 0.0
		}
	}]

campaignTrail_temp.running_mate_json = [{
	"model": "campaign_trail.running_mate", 
	"pk": 33, 
	"fields": {
		"candidate": 23, 
		"running_mate": 55
	}}, 
	{
	"model": "campaign_trail.running_mate", 
	"pk": 37, 
	"fields": {
		"candidate": 24, 
		"running_mate": 58
	}}, 
	{
	"model": "campaign_trail.running_mate", 
	"pk": 42, 
	"fields": {
		"candidate": 25, 
		"running_mate": 63
	}}, 
	{
	"model": "campaign_trail.running_mate", 
	"pk": 43, 
	"fields": {
		"candidate": 26, 
		"running_mate": 64
	}}, 
	{
	"model": "campaign_trail.running_mate", 
	"pk": 44, 
	"fields": {
		"candidate": 27, 
		"running_mate": 65
	}}
]

campaignTrail_temp.opponents_default_json = [{
	"election": 4, 
	"candidates": [23, 24, 25]},
]

campaignTrail_temp.temp_election_list = [{
	"id": 4, 
	"year": 1016, 
	"is_premium": 0, 
	"display_year": "16ABY"
}];

//Make proportional the default

function modifyForm() {
  try {
    const form = document.querySelector('form[name="game_type_selection"]');
    const select = form.querySelector('select[name="game_type_id"]');
  
    // change option value
    const option = select.querySelector('option[value="2"]');
    option.textContent = 'Proportional pls';

    // Remove second option
    select.querySelector('option[value="1"]').remove();
  
    // change h3 text
    const h3 = form.querySelector('h3');
    h3.textContent = 'How would you like the seats to be allocated?';
  } catch {}
}

modifyForm();

<!-- SKIP RUNNING MATE -->

styling = document.createElement("style");
document.head.appendChild(styling);

styling.innerHTML = `
#opponent_selection_id_back {
    display: none;
}
`

let z = new MutationObserver((mutationsList, observer) => {
    let runningMateSummary = document.querySelector("#running_mate_summary");
    if (runningMateSummary) {
        $("#running_mate_id_button").click();
        observer.disconnect()
    }
});

z.observe(document, { subtree: true, childList: true });




<!-- HISTORICAL ENDINGS (TODO) -->

HistHexcolour=["#657FB4","#FFE341","#D3D3D3","#D3D3D3"]; 
HistName=[" Pro-Organa"," Anti-Organa"," Other"," Abstentions"]; 
HistEV=[3551,1713,335,608]; 
HistPV=["-","-","-","-"]; 
HistPVP=["57.2%","27.6%","5.4%","9.8%"];


<!-- THEME --> 

document.getElementById("header").src = "https://i.imgur.com/ItXDett.png";
document.body.background = "https://i.imgur.com/ni5iavY.jpeg";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#3A3360";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#727C96";
$(".container")[0].style.backgroundColor = "#222449";
$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;


function colorFont()
{
if (document.getElementById("election_summary")!=null) 
	{
	document.getElementById("election_summary").style.backgroundColor="black"
	}
}

setInterval(colorFont,200)


<!-- MUSIC -->

//Start theme
var music;

$("#game_start").click((event) => {
    music = new Audio('https://raw.githubusercontent.com/neonhydroxide/tct/main/media/swtheme_romainpennes_clip.mp3');
    music.volume = 0.5;
    music.loop = false;
    music.play();
});

//Main game

musicMode = () => {
    // Initialise custom music
  
    $("#music_player")[0].children[0].style.display = "none"
    $("#music_player")[0].children[1].style.display = "none"
  
    document.getElementById("modLoadReveal").style.display = "none"
    document.getElementById("modloaddiv").style.display = "none"
  
    musicBox = document.getElementById("music_player")
    musicBox.style.display = ""
  
    var trackSel;
    e = campaignTrail_temp
    e.selectedSoundtrack = 0
  
    toTime = (seconds) => {
        var date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
  
    generateTime = () => {
        // Get the audio element
        var audio = document.getElementById("campaigntrailmusic");
  
        timeTracker = document.createElement("div");
        timeTracker.style = `
  text-align:left;
  border-style:solid;
  border-width:3px;
  height:150px;
  width:200px;
  background-color:#999999;
  float:right;
  padding: 10px;
  `
        $("#trackSelParent")[0].prepend(timeTracker);
        $("#trackSelParent")[0].prepend(document.createElement("br"));
  
        // Create a new element to display the current position of the audio
        var positionDisplay = document.createElement("gg");
        positionDisplay.id = "position-display";
  
        // Create a new slider element to change the time
        var timeSlider = document.createElement("input");
        timeSlider.type = "range";
        timeSlider.min = 0;
        timeSlider.max = 1;
        timeSlider.step = 0.001;
        timeSlider.value = 0;
        timeSlider.style.width = "200px";
        timeSlider.id = "time-slider";
  
        var pausePlay = document.createElement("button");
        pausePlay.id = "position-display";
        pausePlay.innerHTML = "<b>Pause</b>"
        pausePlay.style.width = "100%";
  
  
        pausePlay.addEventListener("click", event => {
            event.preventDefault();
            updatePositionDisplay();
            let audio = document.getElementById("campaigntrailmusic");
            if (audio.paused) {
                audio.play();
                event.target.innerHTML = "<b>Pause</b>";
                return;
            }
            audio.pause();
            event.target.innerHTML = "<b>Play</b>";
            return;
        })
  
        var volumeLabel = document.createElement("gg");
        volumeLabel.id = "volume-label";
        volumeLabel.innerHTML = "<br><b>Volume: </b>"
  
        var volumeSlider = document.createElement("input");
        volumeSlider.type = "range";
        volumeSlider.min = 0;
        volumeSlider.max = 1;
        volumeSlider.step = 0.001;
        volumeSlider.value = 0;
        volumeSlider.style.width = "200px";
        volumeSlider.id = "volume-slider";
  
        volumeSlider.value = audio.volume;
  
        timeTracker.appendChild(pausePlay);
        timeTracker.appendChild(document.createElement("br"));
        timeTracker.appendChild(document.createElement("br"));
        timeTracker.appendChild(positionDisplay);
        timeTracker.appendChild(timeSlider);
        timeTracker.appendChild(volumeLabel);
        timeTracker.appendChild(volumeSlider);
  
        updatePositionDisplay();
  
        //for (let i = 0; i < 10; i++)
        //timeTracker.append(document.createElement("br"));
  
  
        // Function to update the position display
        function updatePositionDisplay() {
            positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
            timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
        }
  
        // Function to change the time of the audio
        function changeTime() {
            positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
            audio.currentTime = timeSlider.value * audio.duration;
        }
  
        updateVolume = event => {
            audio.volume = event.target.value;
        }
  
        // Update the position display and slider every second
        setInterval(updatePositionDisplay, 1000);
  
        // Listen for changes to the time slider and change the time of the audio
        timeSlider.addEventListener("input", changeTime);
        volumeSlider.addEventListener("input", updateVolume)
    }
  
    function newMusicPlayer() {
        trackSel = document.createElement("div");
        trackSel.id = "trackSelParent"
        let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#A9A9A9;float:right;">`
        z += `<b><select id='selectSoundtrack'><option value='` + soundtracks[e.selectedSoundtrack].name + `'>` + soundtracks[e.selectedSoundtrack].name + "</option>"
        for (i in soundtracks) {
            if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
                z += `<option value='` + soundtracks[i].name + `'>` + soundtracks[i].name + `</option>`
            }
        }
        z += `</select></b><br><br>`
            // <label><input type="radio" name="option" value="option1">Option 1</label><br>
        for (i in soundtracks[e.selectedSoundtrack].tracklist) {
            let a = soundtracks[e.selectedSoundtrack].tracklist[i]
            let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="` + i + `">` + a.name + `</label><br>`
            z += b
        }
        z += "</div><br><br>"
        trackSel.innerHTML = z
  
        // select correct song
  
        musicBox.appendChild(trackSel);
        Array.from(document.getElementById("trackSel").children).filter(f => {
            return f.tagName == "LABEL"
        }).map(f => f.children[0])[0].checked = true
  
        // set soundtrack changer
  
        soundtrackSelector = document.getElementById("selectSoundtrack")
        soundtrackSelector.onchange = function() {
            for (i in soundtracks) {
                if (soundtracks[i].name == soundtrackSelector.value) {
                    e.selectedSoundtrack = i
                    break
                }
            }
            document.getElementById("trackSelParent").remove()
            newMusicPlayer()
        }
  
        var matches = document.querySelectorAll('.trackSelector');
  
        for (match in matches) {
            matches[match].onchange = function() {
                audio = $("#campaigntrailmusic")[0];
                audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
                audio.currentTime = 0
            }
        }
  
        musicBox.children[2].loop = false
        musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
  
        musicBox.children[2].onended = function() {
            console.log("next track")
            let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
            let newSel = clamp(selected + 1, soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
            let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
                    return f.tagName == "LABEL"
                }).map(f => f.children[0])
                //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
            buttons[newSel].click()
        }
  
        for (w = 0; w < 7; w++) {
            document.getElementById("trackSelParent").appendChild(document.createElement("br"))
        }
  
        generateTime();
    }
  
    clamp = function(a, max, min, overflow = true) {
        if (overflow) {
            return a > max ? min : a < min ? max : a;
        }
        return a > max ? max : a < min ? min : a;
    }
  
  
    // Track list
  
    var soundtracks = {
        0: {
          name: "Galaxy in Jeopardy",
          tracklist: [
            {
              "name": "Gustav Holst - Mars",
              "url": "https://raw.githubusercontent.com/neonhydroxide/tct/main/media/holst_mars_clip.mp3"
            }
          ]
        }        
    }

  
    // Set up new music player
  
    newMusicPlayer()
  

}


//Swaps from intro to game. No clue why this nesting is necessary.
  $("#game_start").click((event) => {
    event.preventDefault();
    $("#election_id_button").click((event) => {
    $("#candidate_id_button").click((event) => {
    $("#running_mate_id_button").click((event) => { //this is necessary because the removal doesnt actually get rid of the running mate, it just clicks the next button really fast lmao
    $("#opponent_selection_id_button").click((event) => {
		music.pause();
        musicMode();
		audio.play()
    })
    })
	})
	})
  })



<!-- QUOTES -->

quotes = ["All kids argue like senior politicians. Except that not all senior politicians can cry on cue.", "Good intentions aren't enough. They're not meaningless, but - that's where we have to start. Not where we end.", "Somebody has to save our skins!", "I don't think anyone ever goes into a war without the nagging feeling that there might have been some other way.", "Holding principles deeply doesn't make a being right.", "Wisdom is knowing when you've given all you can.","I don't know where you get your delusions, laser brain."]
customquote = quotes[Math.floor((Math.random() * quotes.length))]

corrr=`\n<h2><font color='white'>THE CAMPAIGN HYPERLANE</font></h2><font id='wittyquote' size='4' color='white'><em>`+customquote+`</em></font>`


<!-- TOOLTIP STUFF -->

function addDynamicCSS() {
    var css = `
        .inner_window_question h3 .mytooltip{
            background-color: lightskyblue;
        }

        .mytooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: lightblue;
        }

        .mytooltip .mytooltiptext {
            width: 240px;
            background-color: lightblue;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            position: absolute;
            z-index: 99;
            bottom: 20%;
            left: 20%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid black;
            pointer-events: none;
            font-size: 13px !important;
            line-height: 1.5em !important;
            font-weight: normal !important;
            font-style: normal !important;
        }

        .mytooltip .mytooltiptext img {
            max-width: 240px;
            height: auto;
        }

        .mytooltip:hover .mytooltiptext {
            opacity: 1;
            transition-delay: 0.5s;
        }
    `;

    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    
    styleElem.appendChild(document.createTextNode(css));
    
    document.head.appendChild(styleElem);
}

addDynamicCSS();

e.displayTooltips = true;

tooltipList = [
    {searchString: "Jakarta Protocol", explanationText: "<img src=https://i.imgur.com/ey1Ozgc.png> The greatest success of the brief period of global detente in the '80s and '90s; a near-universal international agreement signed after the 1997 Jakarta conference setting targets to fight climate change. Now increasingly being ignored by the Germans, Congolese, and much of the rest of the developing world."},
    {searchString: "Readjuster", explanationText: "<img src=https://i.imgur.com/boNvbSj.png>Right wing of the People's Party. Moderate on economic issues, strongly conservative on social issues, and nationalistically-inclined. Strongest in the South, this wing makes up about a quarter of the current People's Party caucus and has played a key role in obstructing Lipinski's ambitious domestic agenda."},
    {searchString: "Readjusters", explanationText: "<img src=https://i.imgur.com/boNvbSj.png>Right wing of the People's Party. Moderate on economic issues, strongly conservative on social issues, and nationalistically-inclined. Strongest in the South, this wing makes up about a quarter of the current People's Party caucus and has played a key role in obstructing Lipinski's ambitious domestic agenda."},
    {searchString: "Farmer-Labor", explanationText: "<img src=https://i.imgur.com/w287gDb.png> Left wing of the People's Party. Radical on economic issues, moderate on social issues, and strongly isolationist. Strongest in the industrial Midwest and urban cores, this wing makes up about a third of the current People's Party caucus."},
	{searchString: "National Healthcare Administration", explanationText: "America's barely-functional universal healthcare system, created under the Mansfield administration in the '70s. Regularly experiences long delays and cost overruns, but still broadly popular."},
	{searchString: "Assembly", explanationText: "<img src=https://i.imgur.com/gaWnF75.png> The United States' unicameral legislature, with 325 seats in total. After the 2009 elections, the Populists won a small majority of 171 seats, leaving the Whigs with 154. This tiny 8-seat margin meants the President's agenda is often held hostage by one or the other wing of the People's Party."},
    {searchString: "Commonwealth", explanationText: "<img src=https://i.imgur.com/jxY4aXo.png> The reform of what remained of the British Empire after the World Wars, now a loose political union with a shared trade and defense policy."},
    {searchString: "Canada", explanationText: "<img src=https://i.imgur.com/dqmdirN.png> America's dysfunctional northern neighbor, constantly troubled by secessionism and an influx of economic and political migrants from across the Commonwealth looking to sneak into the United States."},
    {searchString: "Canadian", explanationText: "<img src=https://i.imgur.com/dqmdirN.png> America's dysfunctional northern neighbor, constantly troubled by secessionism and an influx of economic and political migrants from across the Commonwealth looking to sneak into the United States."},
    {searchString: "Japan", explanationText: "<img src=https://i.imgur.com/qJIc2lX.png> The Empire of Japan, the world's largest economy and America's chief geopolitical rival since the end of the Third World War - though since the end of the Phillippine War, the U.S. has been mostly content to sit back and watch Japan's empire fray by itself."},
    {searchString: "German", explanationText: "<img src=https://i.imgur.com/4FkGqvr.png> The German Federal Republic, a successor state to the old German State of the '50s-'80s, now led by a former SS commander after an all-too-brief period of liberalization."},
    {searchString: "Germany", explanationText: "<img src=https://i.imgur.com/4FkGqvr.png> The German Federal Republic, a successor state to the old German State of the '50s-'80s, now led by a former SS commander after an all-too-brief period of liberalization."},
    {searchString: "Ugandan", explanationText: "<img src=https://i.imgur.com/q1rt3bO.png> Central East African country and former British colony. Not formally a part of the Commonwealth, but British legislation following the Great African Wars and the subsequent collapse of the Ugandan dictatorship makes it possible for Ugandans to emigrate to Commonwealth countries and subsequently to America."},
    {searchString: "Congo", explanationText: "<img src=https://i.imgur.com/2Ouy3yT.png> Republic of Congo, the foremost of the four 'African Lions' which has seen massive industrialization and economic growth since the end of the Great African Wars."},
    {searchString: "Czechia", explanationText: "<img src=https://i.imgur.com/vypnwCt.png> Central European country, puppet state of Germany from 1944 - 1987 and increasingly under German influence again in recent years. Regained its independence and the disputed Sudetenland territory in the collapse of the German dictatorship in the 1980s. Heavy diaspora population in the Midwest and Brazos."},
    {searchString: "Czech", explanationText: "<img src=https://i.imgur.com/vypnwCt.png> Central European country, puppet state of Germany from 1944 - 1987 and increasingly under German influence again in recent years. Regained its independence and the disputed Sudetenland territory in the collapse of the German dictatorship in the 1980s. Heavy diaspora population in the Midwest and Brazos."},
    {searchString: "Polish", explanationText: "<img src=https://i.imgur.com/OS6f5v8.png> Central European country, puppet state of Germany from 1918 - 1934 and 1945 - 1987. Formerly one of the most repressive countries in the German bloc, with regular resettlement and massacres to 'make room' for German settlers. Huge diaspora population in the Midwest, particularly Chicago."},
    {searchString: "Korea", explanationText: "<img src=https://i.imgur.com/Rr75zHT.png> East Asian country under Japanese control in one form or another for over a hundred years. Although the period of most intense suppression of native Korean culture ended with the Japanese Thaw of the 1970s, Korea remains under tight Japanese control. Moderate diaspora population in the West Coast."},
    {searchString: "Liberia", explanationText: "<img src=https://i.imgur.com/Fbxxo67.png> West African country which, along with Santo Domingo, served as a final destination for former African-descended slaves deported from the United States in the 1880s and 1890s accompanying the abolition of slavery. Currently a semi-independent republic dependent on the United States for its foreign policy."},
    {searchString: "Santo Domingo", explanationText: "<img src=https://i.imgur.com/hJXa6hr.png> Carribean territory which, along with Liberia, served as a final destination for former African-descended slaves deported from the United States in the 1880s and 1890s accompanying the abolition of slavery. Currently a U.S. territory with limited self-government and the most likely candidate for next state to be admitted to the Union."},
    {searchString: "Atlantic Pact", explanationText: "<img src=https://i.imgur.com/lOoHq6w.png> Consultative alliance between the United States, Great Britain, Russia, Spain, and Italy intended to contain German influence. The United States withdrew from most of its binding articles following the collapse of the German dictatorship in the 1980s."},
    {searchString: "Third World War", explanationText: "<img src=https://i.imgur.com/YiSBgu3.png> Conflict in the late 1940s and early 1950s pitting Germany, Italy, and Hungary against the victors of the Second World War - France, Russia, and Yugoslavia. Concurrent with a separate conflict between Japan and Britain in the Pacific; ended with German domination of Europe and Japanese domination of the Pacific."},
    {searchString: "space race", explanationText: "<img src=https://i.imgur.com/YiSBgu3.png> Ongoing competition between the major powers for control of space. Germany was the first to put a satellite and man in orbit, but large space investments in the 1960s and 1970s allowed the United States to be the first to put a man on the moon. All major powers currently operate military space stations, and the United States and Germany both operate moon bases."},
    {searchString: "Wilson", explanationText: "<img src=https://i.imgur.com/Nivd6uJ.png> Woodrow Wilson (D), U.S. President 1914-1924 . Brought the United States into World War I (1914-1921) against the Anglo-German-Austrian alliance. The unpopularity of the war spelled the final death knell of the Democratic Party and of the then-prevailing three-party system, leading to the current Populist-Whig two-party system."},
    {searchString: "Lodge", explanationText: "<img src=https://i.imgur.com/74ukM3T.png> Henry Cabot Lodge II (W), U.S. President 1954-1964. Brought the United States into an active role on the world stage following the Third World War to combat German and Japanese influence. He deployed U.S. advisers to support anti-Japanese forces in China and Indonesia, leading Japan to retaliate by supporting Filipino resistance groups, leading to the Second Phillippine War and the ultimate loss of the Phillippines."},
    {searchString: "confederate", explanationText: "<img src=https://i.imgur.com/U843vUo.png> The Northern Confederacy, a particularist and abolitionist alliance of Northern and New England states which fought and was defeated by the federal government in the Civil War, 1866 - 1872."},
    {searchString: "confederates", explanationText: "<img src=https://i.imgur.com/U843vUo.png> The Northern Confederacy, a particularist and abolitionist alliance of Northern and New England states which fought and was defeated by the federal government in the Civil War, 1866 - 1872."},
    {searchString: "confederacy", explanationText: "<img src=https://i.imgur.com/U843vUo.png> The Northern Confederacy, a particularist and abolitionist alliance of Northern and New England states which fought and was defeated by the federal government in the Civil War, 1866 - 1872."},
    {searchString: "Starry Ring", explanationText: "<img src=https://i.imgur.com/caXnwBz.png> The flag of the Northern Confederacy, and still used as a symbol of Northern identity."},
    {searchString: "Banks", explanationText: "<img src=https://i.imgur.com/VJHux2F.png> Gen. Nathaniel P. Banks, 1816-1873. Confederate leader who became supreme commander of the Confederate Army in the latter part of the Civil War. Executed for treason."},
    {searchString: "Seward", explanationText: "<img src=https://i.imgur.com/zVxXIHq.png> William H. Seward, 1801-1871. First President of the Confederacy, 'Martyr of the North.' Assassinated by Federal sympathizers in New York."},
    {searchString: "Lincoln", explanationText: "<img src=https://i.imgur.com/pXzjsY2.png> Abraham Lincoln, 1809- 1889. Member of the Confederate Congress from Illinois who escaped the country following the Civil War and advocated for an anti-American policy in Great Britain until his death."},
	{searchString: "Lieberman", explanationText: "<img src=https://i.imgur.com/t9EytJW.png> Joe Lieberman (W),  U.S. President 2004-2009. A Whig stalwart but now a controversial figure because of his percieved mismanagement of the Great Recession."}    
];


<!-- MAKE THOSE BUTTONS ACTUALLY WORK -->

next0 = function() {
    document.getElementById("screen0").style.display = "none"
    document.getElementById("screen1").style.display = "initial" 
}
back0 = function() {
    document.getElementById("screen0").style.display = "initial"
    document.getElementById("screen1").style.display = "none" 
}
next1 = function() {
    document.getElementById("screen1").style.display = "none"
    document.getElementById("screen2").style.display = "initial" 
}
back1 = function() {
    document.getElementById("screen1").style.display = "initial"
    document.getElementById("screen2").style.display = "none" 
}

//TODO
campaignTrail_temp.credits = "<button onclick='credits()'>Credits</button>";

credits = function() {
  credits = ["Written and coded by NeonHydroxide. Heavily inspired by 'W', Palpatine 2000, and Suzerain. Intro music by John Williams, covered by Romain Pennes. Game music by Gustav Holst. Thanks to everyone who played and commented on 2014cc!"]
  text = "CREDITS:\n\n"
  for (i in credits) {
      text += credits[i] + "\n"
  }
  alert(text)
}


/*
 * Mod Title: Star Wars 16ABY
 * Mod Author: NeonHydroxide
 * Mod Version: 2
 * Mod Description: A fictional election set in the Star Wars universe.
 * 
 * Coding License: Apache License 2.0
 * Writing License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * 
 * For the coding in this mod, I hereby release the code under the terms and conditions of the Apache License 2.0. The full text of the license can be found at:
 * https://choosealicense.com/licenses/apache-2.0/
 * 
 * For the writing in this mod, including documentation, text files, and other non-software written works, I hereby release the content under the terms and conditions of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. The full text of the license can be found at:
 * https://creativecommons.org/licenses/by-nc/4.0/legalcode
 * 
 * By using, distributing, or modifying this mod, you agree to abide by the terms and conditions of both the Apache License 2.0 and the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license.
*/

