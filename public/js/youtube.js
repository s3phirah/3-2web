    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    function onYouTubeIframeAPIReady() {
        // <div id = "player"></div>
    new YT.Player('player', {
        videoId: 'HLBt_4l_IrQ', // 최조 재생 유튜브 영상 id
        playerVars: {
            autoplay : true, 
            loop : true, 
            playlist : 'HLBt_4l_IrQ'
        },
        events: {
            onReady : function (event) {
                event.target.mute() //  음소거
                
            }
        }
     });
  }