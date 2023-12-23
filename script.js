window.alert('Nhớ bật fullscreen và không nên dùng điện thoại nhé ♥, vì trải nghiệm tốt nhất của cậu ♥. \n\nÀ quên, nhớ bật tiếng nhỏ xí hehe');

function openNameInput() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

function checkInput() {
    input = document.getElementById('nameInput')
    label = document.getElementById('label-nameInput')

    if (input.value.trim() !== '') {
        label.style.display = 'none'
    }
    else {
        label.style.display ='flex'
    }
}

// Kiểm tra giá trị input khi trang được tải
window.onload = checkInput;

// Thêm sự kiện focusout để kiểm tra giá trị khi người dùng thoát khỏi input
nameInput.addEventListener('focusout', function() {
  checkInput();
});

// // Thêm sự kiện input để kiểm tra giá trị khi người dùng xóa hết input
// nameInput.addEventListener('input', function() {
//   checkInput();
// });

function openDig() {
    const name = document.getElementById('nameInput');
    nameIn = name.value.trim();

    if (nameIn !== '') {
        var dig = document.getElementById('dig');
        dig.style.display = 'flex';
        var background = document.getElementById('background-dig');
        background.style.display = 'block';
    }
    else {
        alert('Vui lòng nhập tên rồi mới bấm -_-')
    }
}

function closeNameInput() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    name2 = document.getElementById('nameInput');
    name2.value = '';
}

function closeDig() {
    const close = document.getElementById('dig');
    close.style.display = 'none';
    var background = document.getElementById('background-dig');
    background.style.display = 'none';
}

function openGif() {
    var img1 = document.getElementById('Head');
    var img2 = document.getElementById('Body');
    var img3 = document.getElementById('Last');
    var img4 = document.getElementById('Invite');

    input = document.getElementById('nameInput');
    nameIn = input.value.trim();
    switch(nameIn) {
        case "Cao Nguyên":
            img1.src = 'picture/caonguyenHead.png';
            img2.src = 'picture/caonguyenBody.png';
            img3.src = 'picture/caonguyenLast.png';
            img4.src = 'picture/caonguyenInvite.png';
            break;
        case "Minh Đính":
            img1.src = 'picture/dinhHead.png';
            img2.src = 'picture/dinhBody.png';
            img3.src = 'picture/dinhLast.png';
            img4.src = 'picture/dinhInvite.png';
            break;
        case "Trọng Tiến":
            img1.src = 'picture/dinhtienHead.png';
            img2.src = 'picture/dinhtienBody.png';
            img3.src = 'picture/dinhtienLast.png';
            img4.src = 'picture/dinhtienInvite.png';
            break;
        case "Duy Hưng":
            img1.src = 'picture/hungHead.png';
            img2.src = 'picture/hungBody.png';
            img3.src = 'picture/hungLast.png';
            img4.src = 'picture/hungInvite.png';
            break;  
        case "An Huy":
            img1.src = 'picture/huyHead.png';
            img2.src = 'picture/huyBody.png';
            img3.src = 'picture/huyLast.png';
            img4.src = 'picture/huyInvite.png';
            break;  
        case "Hà Ngân":
            img1.src = 'picture/nganHead.png';
            img2.src = 'picture/nganBody.png';
            img3.src = 'picture/nganLast.png';
            img4.src = 'picture/nganInvite.png';
            break;  
        case "Ngọc Linh":
            img1.src = 'picture/ngoclinhHead.png';
            img2.src = 'picture/ngoclinhBody.png';
            img3.src = 'picture/ngoclinhLast.png';
            img4.src = 'picture/ngoclinhInvite.png';
            break;  
        case "Hoàng Nguyên":
            img1.src = 'picture/nguyenHead.png';
            img2.src = 'picture/nguyenBody.png';
            img3.src = 'picture/nguyenLast.png';
            img4.src = 'picture/nguyenInvite.png';
            break;
        case "Quý Nhân":
            img1.src = 'picture/nhanHead.png';
            img2.src = 'picture/nhanBody.png';
            img3.src = 'picture/nhanLast.png';
            img4.src = 'picture/nhanInvite.png';
            break;
        case "Yến Nhi":
            img1.src = 'picture/nhiHead.png';
            img2.src = 'picture/nhiBody.png';
            img3.src = 'picture/nhiLast.png';
            img4.src = 'picture/nhiInvite.png';
            break;
        case "Văn Thắng":
            img1.src = 'picture/thangHead.png';
            img2.src = 'picture/thangBody.png';
            img3.src = 'picture/thangLast.png';
            img4.src = 'picture/thangInvite.png';
            break;
        case "Tấn Thành":
            img1.src = 'picture/thanhHead.png';
            img2.src = 'picture/thanhBody.png';
            img3.src = 'picture/thanhLast.png';
            img4.src = 'picture/thanhInvite.png';
            break;
        case "Như Thiện":
            img1.src = 'picture/thienHead.png';
            img2.src = 'picture/thienBody.png';
            img3.src = 'picture/thienLast.png';
            img4.src = 'picture/thienInvite.png';
            break;
        case "Thùy Linh":
            img1.src = 'picture/thuylinhHead.png';
            img2.src = 'picture/thuylinhBody.png';
            img3.src = 'picture/thuylinhLast.png';
            img4.src = 'picture/thuylinhInvite.png';
            break;
        case "Thanh Thương":
            img1.src = 'picture/thuongHead.png';
            img2.src = 'picture/thuongBody.png';
            img3.src = 'picture/thuongLast.png';
            img4.src = 'picture/thuongInvite.png';
            break;
        default:
            img1.src = 'picture/friendHead.png';
            img2.src = 'picture/friendBody.png';
            img3.src = 'picture/friendLast.png';
            img4.src = 'picture/friendInvite.png';
        }

    var close = document.getElementById('dig');
    close.style.display = 'none';
    var background = document.getElementById('background-dig');
    background.style.display = 'none';

    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    var heart = document.getElementById('heart');
    heart.style.display = 'block'
    heart.classList.add ("opened")

    var snow = document.getElementById('snow');
    snow.style.display = 'block'

    var background = document.getElementById('background-dig');
    background.style.display = 'block';
}

function openGif2() {
    var heart = document.getElementById('heart');
    heart.classList.add("heartMove");
    heart.addEventListener("animationend", () => {
        heart.classList.add("heartAfter");
        var animatedDiv = document.getElementById("gif");
        animatedDiv.classList.remove("closed");
        animatedDiv.classList.add("opened");

        var gif = document.getElementById('gif');
        gif.style.display = 'flex';
        animatedDiv.scrollLeft = 0;
    }, { once: true });
}

function closeGif() {
    var heart = document.getElementById('heart');
    heart.classList.add("heartMoveRight");
    heart.classList.add("heartAfterRight");
    heart.addEventListener("animationend", () => {
        heart.classList.remove("heartMoveRight");
        heart.classList.add("heartMoveLeft");

        var animatedDiv = document.getElementById("gif");
        animatedDiv.classList.remove("opened");
        animatedDiv.classList.add("closed");
  
        animatedDiv.addEventListener("animationend", () => {
        animatedDiv.style.display = 'none';

    }, { once: true });
        heart.addEventListener("animationend", () => {
        heart.classList.remove("heartAfterRight");
        heart.classList.remove("heartMoveLeft");
        heart.classList.remove("heartAfter");
        heart.classList.remove("heartMove");
        heart.classList.remove("opened");
        heart.style.display = 'none';
        var snow = document.getElementById('snow');
        snow.style.display = 'none';

        var background = document.getElementById('background-dig');
        background.style.display = 'none';
        name2 = document.getElementById('nameInput');
        name2.value = '';
    }, { once: true });
    }, { once: true });
    
    // animatedDiv.scrollLeft = 0;
    // var snow = document.getElementById('snow');
    // snow.style.display = 'none';
}

// var animatedDiv = document.getElementById("gif");
//     animatedDiv.classList.remove("closed");
//     animatedDiv.classList.add("opened");

//     var gif = document.getElementById('gif');
//     gif.style.display = 'flex';
//     animatedDiv.scrollLeft = 0;
//     var snow = document.getElementById('snow');
//     snow.style.display = 'block';