Synth instanceof AudioSynth; // true

// var testInstance = new AudioSynth;
// testInstance instanceof AudioSynth; // true

// testInstance === Synth; // true

var piano = Synth.createInstrument('piano');

window.onload = function() {
    var context = new AudioContext();
    // Setup all nodes
    document.querySelector('button').addEventListener('click', function() {
        context.resume().then(() => {
        function play() {
            var time = 0;
            let music = [{ a: "C", b: 4, c: 2000 }, { a: "D", b: 4, c: 2000 }, { a: "E", b: 4, c: 2000 }];
            music.forEach(item => {
                console.log(time);
                piano.play('C', 4, 2)
                setTimeout(piano.play(item.a, item.b, item.c / 1000), time);
                // piano.play(item.a, item.b, item.c / 1000);
                time += item.c;
            });
        }
        play();
    });
    });
}

