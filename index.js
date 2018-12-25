Synth instanceof AudioSynth; // true

// var testInstance = new AudioSynth;
// testInstance instanceof AudioSynth; // true

// testInstance === Synth; // true

var piano = Synth.createInstrument('piano');
var speed = 400;

window.onload = function() {
    var context = new AudioContext();
    // Setup all nodes
    document.querySelector('button').addEventListener('click', function() {
        context.resume().then(() => {
        function play() {
            var musictime = 0;
            let music = [{ key: "E", interval: 4, playtime: 2*speed },{ key: "G", interval: 4, playtime: 2*speed },
            { key: "E", interval: 4, playtime: 1*speed },{ key: "G", interval: 4, playtime: 1*speed },
            { key: "D", interval: 5, playtime: 2*speed },{ key: "E", interval: 5, playtime: 2*speed },
            { key: "E", interval: 4, playtime: 2*speed },{ key: "G", interval: 4, playtime: 2*speed },
            { key: "E", interval: 4, playtime: 1*speed },{ key: "G", interval: 4, playtime: 1*speed },
            { key: "D", interval: 5, playtime: 2*speed },{ key: "E", interval: 5, playtime: 2*speed }];

            music.forEach(item => {
                // piano.play('C', 4, 2)
                setTimeout(() => { piano.play(item.key, item.interval, item.playtime / 1000) }, musictime);
                // piano.play(item.a, item.b, item.c / 1000);
                musictime += item.playtime;
            });

            var chordtime = 0;
            let chord=[
            [{ key: "C", interval: 4, playtime: 6*speed },{ key: "E", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
            [{ key: "C", interval: 4, playtime: 6*speed },{ key: "E", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
            [{ key: "B", interval: 4, playtime: 6*speed },{ key: "D", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}],
            [{ key: "B", interval: 4, playtime: 6*speed },{ key: "D", interval: 4, playtime: 6*speed},{ key: "G", interval: 4, playtime: 6*speed}]
            ];
            chord.forEach(item => {
              setTimeout(() => {
                item.forEach(single => {
                  piano.play(single.key, single.interval, single.playtime / 1000);
                })
              },chordtime);
                chordtime += 6*speed;
            })

        }
        play();
    });
    });
}
