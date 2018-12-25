Synth instanceof AudioSynth;


var piano = Synth.createInstrument('piano');

//音樂設定
var speed = 380;
var musictime = 0;
var chordtime = 0;

//樂譜
let music = [{ key: "E", interval: 4, playtime: 2*speed },{ key: "G", interval: 4, playtime: 2*speed },
{ key: "E", interval: 4, playtime: 1*speed },{ key: "G", interval: 4, playtime: 1*speed },
{ key: "D", interval: 5, playtime: 2*speed },{ key: "E", interval: 5, playtime: 2*speed },
{ key: "E", interval: 4, playtime: 2*speed },{ key: "G", interval: 4, playtime: 2*speed },
{ key: "E", interval: 4, playtime: 1*speed },{ key: "G", interval: 4, playtime: 1*speed },
{ key: "D", interval: 5, playtime: 2*speed },{ key: "E", interval: 5, playtime: 2*speed }];

let chord=[
[{ key: "C", interval: 4, playtime: 6*speed },{ key: "E", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
[{ key: "C", interval: 4, playtime: 6*speed },{ key: "E", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
[{ key: "B", interval: 4, playtime: 6*speed },{ key: "D", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
[{ key: "B", interval: 4, playtime: 6*speed },{ key: "D", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}]
];

//畫面隨節奏變化
let container = document.querySelector('.container');

window.onload = function() {
    var context = new AudioContext();
    document.querySelector('button').addEventListener('click', function() {
        context.resume().then(() => {
        function play(music,chord) {
            music.forEach(item => {
                setTimeout(() => {
                  piano.play(item.key, item.interval, item.playtime / 1000);
                  container.classList.add("beat");
                  setTimeout(()=>{ container.classList.remove("beat")},300); }
                  , musictime);
                musictime += item.playtime;
            });
            chord.forEach(item => {
              setTimeout(() => {
                item.forEach(single => {
                  piano.play(single.key, single.interval, single.playtime / 1000);
                });
              },chordtime);
                chordtime += 6*speed;
            });
        }
        play(music,chord);
    });
    });
}
