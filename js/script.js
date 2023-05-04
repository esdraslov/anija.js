let frames = anija.makeFrames('ease in out', {
    leftPos: "0",
    rightPos: 0
}, {
    leftPos: "8",
    rightPos: 0
})

anija.makeAnimation(frames, subJs.getChildByClass('cube'))