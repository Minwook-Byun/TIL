(() => {

    let yOffset = 0; // window.pageOffset대신 사용할 변수. 
    let pervScrollHeight = 0; //yOffset보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합 
    let currentScene = 0; //현재 활성화된 (눈 앞에서 보고 있는 ) 씬 


    const sceneInfo = [{
            // 0번 화면
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0') // get each section 
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
            sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
        }
        console.log(sceneInfo);
    }

    setLayout();




    function scrollLoop() {
        pervScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            pervScrollHeight += sceneInfo[i].scrollHeight; //계속 더해주면서 
        }

        if(yOffset > pervScrollHeight){
            
        }
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });


})();