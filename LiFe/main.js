(() => {

    const sceneInfo = [{
            // 0번 화면
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
        },
        {
            // 1번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
        },
        {
            // 2번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
        },
        {
            // 3번 화면 
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
        }
    ];

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
        }
        console.log(sceneInfo);
    }

    setLayout();

})();