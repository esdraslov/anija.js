let anija = {
    makeFrames: (easing, ...frames) => {
        return [easing, frames]
    },
    makeAnimation: (frames, child = document.body, time = 1, repeat = false) => {
         if(repeat){
            let interv = setInterval(() => {
                for(let i = 0; i < frames['length']; i++){
                    child.style.left = frames[i + 1].leftPos
                    setTimeout(() => {}, time)
                }
            }, time)
         }
    }
}