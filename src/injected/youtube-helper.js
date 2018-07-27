(function(){

  const controlsId = "youtube-helper-controls";

  const int = setInterval(()=>{
    const after = document.querySelector("div.player-container");
    if(after){
      const prev = after.previousElementSibling;
      if(!(prev && prev.id === controlsId)){
        const group = createControls(after);
        after.parentElement.insertBefore(group, after);
        after.style.top = getPx(getComputedStyle(after).top) + group.clientHeight + "px";
        clearInterval(int);
      }
    }
  }, 1e3);

  function getPx(str){
    return Number.parseInt(str.substr(0, str.length-2))
  }

  function createControls(after){

    const group = document.createElement("div");
    group.id = controlsId;

    const backBtn = document.createElement("button");
    backBtn.innerText = "<-";
    backBtn.onclick = ()=>document.querySelector("video").currentTime -= 10;
    backBtn.classList.add("youtube-helper-button");
    group.appendChild(backBtn);

    const oneXBtn = document.createElement("button");
    oneXBtn.innerText = "1";
    oneXBtn.onclick = ()=>document.querySelector("video").playbackRate = 1;
    oneXBtn.classList.add("youtube-helper-button");
    group.appendChild(oneXBtn);

    const reduceSpeedBtn = document.createElement("button");
    reduceSpeedBtn.innerText = "<<";
    reduceSpeedBtn.onclick = ()=>document.querySelector("video").playbackRate -= 0.5;
    reduceSpeedBtn.classList.add("youtube-helper-button");
    group.appendChild(reduceSpeedBtn);

    const increaseSpeedBtn = document.createElement("button");
    increaseSpeedBtn.innerText = ">>";
    increaseSpeedBtn.onclick = ()=>document.querySelector("video").playbackRate += 0.5;
    increaseSpeedBtn.classList.add("youtube-helper-button");
    group.appendChild(increaseSpeedBtn);

    const threeXBtn = document.createElement("button");
    threeXBtn.innerText = "3";
    threeXBtn.onclick = ()=>document.querySelector("video").playbackRate = 3;
    threeXBtn.classList.add("youtube-helper-button");
    group.appendChild(threeXBtn);

    const fwdBtn = document.createElement("button");
    fwdBtn.innerText = "->";
    fwdBtn.onclick = ()=>document.querySelector("video").currentTime += 10;
    fwdBtn.classList.add("youtube-helper-button");
    group.appendChild(fwdBtn);

    return group;
  }

})();


