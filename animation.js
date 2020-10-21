
/**
 * 
 * @param {位移元素} elm 
 * @param {目标位置} target 
 */
function moveAnimation(elm,target) {
    clearInterval(elm.timeID);
    let position = elm.offsetLeft;
    let step = (target - position) > 0 ? 10 : -10;
    elm.timeID = setInterval(
        function () {
            position += step;
            if (Math.abs(target - position) > Math.abs(step)) {
                elm.style.left = position + 'px';
            } else {
                elm.style.left = target + 'px';
                clearInterval(elm.timeID);
            }
        },20
    )
}