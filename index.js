Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');

window.onload = function() {
  var context = new AudioContext();
  // Setup all nodes
  document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      piano.play('C', 4, 2);
    });
  });
}
