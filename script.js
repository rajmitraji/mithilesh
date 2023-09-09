const imgsec = document.getElementById('div13')
console.log(imgsec);
var backImgEle = document.getElementById('rajaji');
console.log(backImgEle);
var initialCountdownValue = 100;
console.log(initialCountdownValue);
setInterval(function () {
    initialCountdownValue -= 1;
    var backImgPath = initialCountdownValue % 2 === 0 ? '/image/mithuji0.jpg' : '/image/mithuji1.jpeg';
    backImgEle.src = backImgPath;
//     // console.log('Interval Running');

}, 1000);











