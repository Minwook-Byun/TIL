(() => {

    let yOffset = 0; // window.pageOffset대신 사용할 변수. 
    let pervScrollHeight = 0; //yOffset보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합 
    let currentScene = 0; //현재 활성화된 (눈 앞에서 보고 있는 ) scroll-section 
    let IntoNewScene = false; //get into the new scene => become True 
    const SectionTitle = document.querySelector('#section-title');

    const sceneInfo = [

        {
            // 0번 화면
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0'), // get each section 
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d'),
                messageE: document.querySelector('#scroll-section-0 .main-message.e'),
                canvas: document.querySelector('#video-canvas-0'),
                ctx: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: []
            },
            values: {
                // in 동작 
                OpacityOfMessageA_in: [0, 1, {
                    start: 0.1,
                    end: 0.2
                }],

                OpacityOfMessageB_in: [0, 1, {
                    start: 0.3,
                    end: 0.4
                }],

                OpacityOfMessageC_in: [0, 1, {
                    start: 0.5,
                    end: 0.6
                }],

                OpacityOfMessageD_in: [0, 1, {
                    start: 0.7,
                    end: 0.8
                }],

                OpacityOfMessageE_in: [0, 1, {
                    start: 0.91,
                    end: 0.96
                }],

                OpacityOfMessageA_out: [0, 1, {
                    start: 0.25,
                    end: 0.3
                }],
                OpacityOfMessageB_out: [0, 1, {
                    start: 0.45,
                    end: 0.5
                }],
                OpacityOfMessageC_out: [0, 1, {
                    start: 0.65,
                    end: 0.7
                }],
                OpacityOfMessageD_out: [0, 1, {
                    start: 0.85,
                    end: 0.9
                }],
                OpacityOfMessageE_out: [0, 1, {
                    start: 0.96,
                    end: 0.99
                }],

                // video관련 부분 
                videoImageCount: 10,
                imageSequence: [0, 9],
                OpacityOfCanvas: [1, 0, {
                    start: 0.9,
                    end: 1
                }],
            }
        },
        {
            // 1번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            // 2번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            // 3번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];


    function setLayout() {
        // setting height for each section 
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
            } else if (sceneInfo[i].type === 'normal') {
                sceneInfo.scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            }
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        // 새로고침 대응하기 
        yOffset = window.pageYOffset; // 변수 통일해주기

        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);

        // canvas scale
        const heightRatio = window.innerHeight / 1080;
        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%,-50%, 50%) scale($heightRatio)`

    }

    setLayout();




    function scrollLoop() {
        IntoNewScene = false;
        pervScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            pervScrollHeight += sceneInfo[i].scrollHeight; //계속 더해주면서 
        }

        if (yOffset > pervScrollHeight + sceneInfo[currentScene].scrollHeight) {
            IntoNewScene = true;
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (yOffset < pervScrollHeight) {
            IntoNewScene = true;
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }

        if (IntoNewScene) return;

        animate();
    }

    function calculateValues(values, currentYOffset) {
        let rv;
        // 현재 씬{scrollsection}에서의 비율
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight


        if (values.length === 3) {
            // starting animate between start and end
            const partScrollStart = values[2].start * scrollHeight;
            const partScrollEnd = values[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                // console.log('1번시작')
                rv = (currentYOffset - partScrollStart) / partScrollHeight * ((values[1] - values[0]) + values[0]);

            } else if (currentYOffset < partScrollStart) {
                // console.log('2번시작')
                rv = values[0];
            } else if (currentYOffset > partScrollStart) {
                // console.log('3번시작')
                rv = values[1];
            }

        } else {
            rv = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return rv;
    }


    function setCanvasImage() {
        let imgSrc;
        for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
            imgSrc = new Image();
            imgSrc.src = `./video/${i}.JPG`
            sceneInfo[0].objs.videoImages.push(imgSrc);
        }
    }

    setCanvasImage();

    function animate() {
        const stageObjs = sceneInfo[currentScene].objs; // 변수로 선언해주기
        const stageValues = sceneInfo[currentScene].values; //자주사용하는 것들은
        const currentYOffset = yOffset - pervScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = (yOffset - pervScrollHeight) / scrollHeight;

        switch (currentScene) {
            case 0:
                // console.log('0 play')
                SectionTitle.style.opacity = 1 + scrollRatio
                SectionTitle.innerHTML = `section-1 시작`
                let sequence = Math.round(calculateValues(stageValues.imageSequence, currentYOffset));
                stageObjs.ctx.drawImage(stageObjs.videoImages[sequence], 0, 0, 1920, 1080);


                if (scrollRatio <= 0.22) {
                    //in
                    stageObjs.messageA.style.opacity = calculateValues(stageValues.OpacityOfMessageA_in, currentYOffset);
                } else {
                    //out
                    stageObjs.messageA.style.opacity = 1 - calculateValues(stageValues.OpacityOfMessageA_out, currentYOffset);
                }

                if (scrollRatio <= 0.42) {
                    //in
                    stageObjs.messageB.style.opacity = calculateValues(stageValues.OpacityOfMessageB_in, currentYOffset);
                } else {
                    //out
                    stageObjs.messageB.style.opacity = 1 - calculateValues(stageValues.OpacityOfMessageB_out, currentYOffset);
                }


                if (scrollRatio <= 0.62) {
                    //in
                    stageObjs.messageC.style.opacity = calculateValues(stageValues.OpacityOfMessageC_in, currentYOffset);
                } else {
                    //out
                    stageObjs.messageC.style.opacity = 1 - calculateValues(stageValues.OpacityOfMessageC_out, currentYOffset);
                }


                if (scrollRatio <= 0.82) {
                    //in
                    stageObjs.messageD.style.opacity = calculateValues(stageValues.OpacityOfMessageD_in, currentYOffset);
                } else {
                    //out
                    stageObjs.messageD.style.opacity = 1 - calculateValues(stageValues.OpacityOfMessageD_out, currentYOffset);
                }

                if (scrollRatio <= 0.92) {
                    //in
                    stageObjs.messageE.style.opacity = calculateValues(stageValues.OpacityOfMessageE_in, currentYOffset);
                } else {
                    //out
                    stageObjs.messageE.style.opacity = 1 - calculateValues(stageValues.OpacityOfMessageE_out, currentYOffset);
                }


                break;
            case 1:
                // console.log('1 play')
                SectionTitle.style.opacity = 0.2 + scrollRatio
                SectionTitle.innerText = `section-2 시작`
                break;
            case 2:
                // console.log('2 play')
                SectionTitle.style.opacity = 0.2 + scrollRatio
                SectionTitle.innerText = `section-3 시작`
                break;
            case 3:
                // console.log('3 play')
                SectionTitle.style.opacity = 0.2 + scrollRatio
                SectionTitle.innerText = `section-4 시작`
                break;
        }
    }



    animate()

    window.addEventListener('resize', setLayout);
    window.addEventListener('load', () => {
        setLayout();
    });

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });


})();