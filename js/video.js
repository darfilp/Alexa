const video__btn = document.querySelector('.video__svg');

const seeElement = () => {
    const controlVideo = document.querySelector('.control');
    const videoPlayer = document.querySelector('.video__player');
    const img = document.querySelector('.video__player img');
    const video = document.querySelector('.video__viewer');
    const play = document.querySelector('.video__play');
    const pause = document.querySelector('.video__pause');
    const speedBack = document.querySelector('.video__backward');
    const speedUp = document.querySelector('.video__forward');
    const screen = document.querySelector('.video__screen');
    const volume = document.querySelector('.video__volume');
    const mute = document.querySelector('.video__mute');
    const volumeSkale = document.querySelector('.video__skale');
    const videoTime = document.querySelector('.video__time');

    controlVideo.style.display = 'flex';
    videoPlayer.style.border = '1px solid #bdae82';
    video__btn.style.display = 'none';
    img.style.display = 'none';
    video.style.display = 'flex';
    play.style.display = 'none';
    pause.style.display = 'flex';
    video.volume = 0.1;
    volumeSkale.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) 10%, rgb(200, 200, 200) 10%, rgb(200, 200, 200) 100%)`;
    //play.innerHTML = '<svg><use xlink:href="assets/svg/pause.svg#pause"></use></svg>'
    video.play();

    // videoTime.addEventListener('input', () => {
    //     let time = videoTime.value;
    //     let currentTime = video.currentTime;
    //     console.log(currentTime);
    //     videoTime.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${time}%, rgb(200, 200, 200) ${time}%, rgb(200, 200, 200) 100%)`;
    // });

    videoTime.addEventListener('click', (e) => {
        //сonsole.log('jb');
        let o = videoTime.offsetWidth;
        let c = e.offsetX;
        videoTime.value = (100 * c) / o;
        video.pause();
        video.currentTime = video.duration * (c / o);
        video.play();
    });

    video.addEventListener('timeupdate', () => {
        let c = video.currentTime;
        let d = video.duration;
        videoTime.value = (100 * c) / d;
        videoTime.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${videoTime.value}%, rgb(200, 200, 200) ${videoTime.value}%, rgb(200, 200, 200) 100%)`;
        
    });

    

    

    video.addEventListener('click', (e) => {
        pause.style.display = 'none';
        play.style.display = 'flex';
        video.pause();
        video__btn.style.display = 'flex';
        
        video__btn.addEventListener('click', () => {
            play.style.display = 'none';
            pause.style.display = 'flex';
            video.play(); 
        });
    //     video.pause();
    });


    play.addEventListener('click', () => {
        video__btn.style.display = 'none';
        play.style.display = 'none';
        pause.style.display = 'flex';
        video.playbackRate = 1;
        video.play();   
    });

    pause.addEventListener('click', () => {
        pause.style.display = 'none';
        play.style.display = 'flex';
        video__btn.style.display = 'flex';
        video.pause();
    });

    speedBack.addEventListener('click', () => {
        video.play();
        video.playbackRate = 0.5;
    });

    speedUp.addEventListener('click', () => {
        video.play();
        video.playbackRate = 1.5;
    });

    screen.addEventListener('click', () => {
        video.requestFullscreen();
    });

    volume.addEventListener('click', () => {
        volume.style.display = 'none';
        mute.style.display = 'flex';
        video.volume = 0;
    });

    mute.addEventListener('click', () => {
        volume.style.display = 'flex';
        mute.style.display = 'none';
        let skale = volumeSkale.value;
        video.volume = skale / 100;
    });

    volumeSkale.addEventListener('input', (e) => {
        let skale = volumeSkale.value;
        if (skale == 0) {
            volume.style.display = 'none';
            mute.style.display = 'flex';
        } else {
            volume.style.display = 'flex';
            mute.style.display = 'none';
        }
        video.volume = skale / 100;
        volumeSkale.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${skale}%, rgb(200, 200, 200) ${skale}%, rgb(200, 200, 200) 100%)`;
        
    })
};

video__btn.addEventListener('click', seeElement)

