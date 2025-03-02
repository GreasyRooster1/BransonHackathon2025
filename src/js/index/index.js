function init(){
    createBlurs();
    //initMap();
    setupEvents();
    setupSummaryEvents();
    addMissionListeners();
    updateRankVisual();
}

window.onload = init;