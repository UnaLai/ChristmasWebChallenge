(function() {
  //建立鋼琴實例
  Synth instanceof AudioSynth;
  var piano = Synth.createInstrument('piano');

  //音樂速度設定
  var speed = 300;

  //樂譜
  let rightHandSpectrum = [{
      key: "E",
      interval: 4,
      playtime: 2 * speed
    },
    {
      key: "G",
      interval: 4,
      playtime: 2 * speed
    },
    {
      key: "E",
      interval: 4,
      playtime: 1 * speed
    },
    {
      key: "G",
      interval: 4,
      playtime: 1 * speed
    },
    {
      key: "D",
      interval: 5,
      playtime: 2 * speed
    },
    {
      key: "E",
      interval: 5,
      playtime: 2 * speed
    },
    {
      key: "E",
      interval: 4,
      playtime: 2 * speed
    },
    {
      key: "G",
      interval: 4,
      playtime: 2 * speed
    },
    {
      key: "E",
      interval: 4,
      playtime: 1 * speed
    },
    {
      key: "G",
      interval: 4,
      playtime: 1 * speed
    },
    {
      key: "D",
      interval: 5,
      playtime: 2 * speed
    },
    {
      key: "E",
      interval: 5,
      playtime: 2 * speed
    }
  ];

  let leftHandSpectrum = [
    [{
        key: "C",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "E",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "G",
        interval: 4,
        playtime: 2 * speed
      }
    ],
    [{
        key: "C",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "E",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "G",
        interval: 4,
        playtime: 2 * speed
      }
    ],
    [{
        key: "B",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "D",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "G",
        interval: 4,
        playtime: 2 * speed
      }
    ],
    [{
        key: "B",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "D",
        interval: 4,
        playtime: 2 * speed
      },
      {
        key: "G",
        interval: 4,
        playtime: 2 * speed
      }
    ]
  ];

  let container = document.querySelector('.container');

  window.onload = function() {
    document.querySelector('button').addEventListener('click', () => {
      play(rightHandSpectrum, leftHandSpectrum)
    });

    function play(rightHandSpectrum, leftHandSpectrum) {
      rightHandPlay(rightHandSpectrum);
      leftHandPlay(leftHandSpectrum);
    }

    function rightHandPlay(spectrum) {
      let rightHandTime = 0;
      spectrum.forEach(item => {
        setTimeout(() => {
          piano.play(item.key, item.interval, item.playtime / 1000);
          musicEffect();
        }, rightHandTime);
        rightHandTime += item.playtime;
      });
    }

    function leftHandPlay(spectrum) {
      let leftHandTime = 0;
      spectrum.forEach(item => {
        setTimeout(() => {
          item.forEach(single => {
            piano.play(single.key, single.interval, single.playtime / 1000);
          });
        }, leftHandTime);
        leftHandTime += 6 * speed;
      });
    }

    function musicEffect() {
      container.classList.add("beat");
      setTimeout(() => {
        container.classList.remove("beat")
      }, 300);
    }
  }
})();
