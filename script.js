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
            img1.src = 'caonguyenHead.png';
            img2.src = 'caonguyenBody.png';
            img3.src = 'caonguyenLast.png';
            img4.src = 'caonguyenInvite.png';
            break;
        case "Minh Đính":
            img1.src = 'dinhHead.png';
            img2.src = 'dinhBody.png';
            img3.src = 'dinhLast.png';
            img4.src = 'dinhInvite.png';
            break;
        case "Trọng Tiến":
            img1.src = 'dinhtienHead.png';
            img2.src = 'dinhtienBody.png';
            img3.src = 'dinhtienLast.png';
            img4.src = 'dinhtienInvite.png';
            break;
        case "Duy Hưng":
            img1.src = 'hungHead.png';
            img2.src = 'hungBody.png';
            img3.src = 'hungLast.png';
            img4.src = 'hungInvite.png';
            break;  
        case "An Huy":
            img1.src = 'huyHead.png';
            img2.src = 'huyBody.png';
            img3.src = 'huyLast.png';
            img4.src = 'huyInvite.png';
            break;  
        case "Hà Ngân":
            img1.src = 'nganHead.png';
            img2.src = 'nganBody.png';
            img3.src = 'nganLast.png';
            img4.src = 'nganInvite.png';
            break;  
        case "Ngọc Linh":
            img1.src = 'ngoclinhHead.png';
            img2.src = 'ngoclinhBody.png';
            img3.src = 'ngoclinhLast.png';
            img4.src = 'ngoclinhInvite.png';
            break;  
        case "Hoàng Nguyên":
            img1.src = 'nguyenHead.png';
            img2.src = 'nguyenBody.png';
            img3.src = 'nguyenLast.png';
            img4.src = 'nguyenInvite.png';
            break;
        case "Quý Nhân":
            img1.src = 'nhanHead.png';
            img2.src = 'nhanBody.png';
            img3.src = 'nhanLast.png';
            img4.src = 'nhanInvite.png';
            break;
        case "Yến Nhi":
            img1.src = 'nhiHead.png';
            img2.src = 'nhiBody.png';
            img3.src = 'nhiLast.png';
            img4.src = 'nhiInvite.png';
            break;
        case "Văn Thắng":
            img1.src = 'thangHead.png';
            img2.src = 'thangBody.png';
            img3.src = 'thangLast.png';
            img4.src = 'thangInvite.png';
            break;
        case "Tấn Thành":
            img1.src = 'thanhHead.png';
            img2.src = 'thanhBody.png';
            img3.src = 'thanhLast.png';
            img4.src = 'thanhInvite.png';
            break;
        case "Như Thiện":
            img1.src = 'thienHead.png';
            img2.src = 'thienBody.png';
            img3.src = 'thienLast.png';
            img4.src = 'thienInvite.png';
            break;
        case "Thùy Linh":
            img1.src = 'thuylinhHead.png';
            img2.src = 'thuylinhBody.png';
            img3.src = 'thuylinhLast.png';
            img4.src = 'thuylinhInvite.png';
            break;
        case "Thanh Thương":
            img1.src = 'thuongHead.png';
            img2.src = 'thuongBody.png';
            img3.src = 'thuongLast.png';
            img4.src = 'thuongInvite.png';
            break;
        default:
            img1.src = 'friendHead.png';
            img2.src = 'friendBody.png';
            img3.src = 'friendLast.png';
            img4.src = 'friendInvite.png';
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
