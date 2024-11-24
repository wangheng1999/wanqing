let b1_img1 = document.querySelector('.b1_img1')
let b1_img2 = document.querySelector('.b1_img2')
let b1_img3 = document.querySelector('.b1_img3')
let img3_1_i = document.querySelector('.img3_1_i')
let img4_1_i = document.querySelector('.img4_1_i')
let img5_1_i = document.querySelector('.img5_1_i')

setTimeout(() => {
    b1_img1.style.top = '30%';
    b1_img1.style.opacity = 1;
    b1_img2.style.top = '30%';
    b1_img2.style.opacity = 1;
    b1_img3.style.top = '40%';
    b1_img3.style.opacity = 1;
}, 2000)

img3_1_i.addEventListener('mouseenter', function () {
    img3_1_i.src = 'image/img3_2.png'
});
img3_1_i.addEventListener('mouseleave', function () {
    img3_1_i.src = 'image/img3_1.png'
});

img4_1_i.addEventListener('mouseenter', function () {
    img4_1_i.src = 'image/img4_2.png'
});
img4_1_i.addEventListener('mouseleave', function () {
    img4_1_i.src = 'image/img4_1.png'
});

img5_1_i.addEventListener('mouseenter', function () {
    img5_1_i.src = 'image/img5_2.png'
});
img5_1_i.addEventListener('mouseleave', function () {
    img5_1_i.src = 'image/img5_1.png'
});

let b3 = document.querySelector('#b3');


b3.addEventListener('mousemove', (event) => {
    const square = document.createElement('div');
    square.classList.add('n3_yd_img');

    const rect = b3.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    square.style.left = `${x - 100}px`; // 方块中心对齐鼠标
    square.style.top = `${y - 100}px`;

    let imgs = document.createElement('img');
    imgs.src = 'image/img5_2.png'
    square.appendChild(imgs)
    // 添加方块到容器
    b3.appendChild(square);

    // 让方块逐渐消失
    setTimeout(() => {
        square.style.opacity = '0';
        setTimeout(() => {
            square.remove();
        }, 500); // 等待透明度过渡完成后移除
    }, 100); // 短暂停留后开始消失
})


let b4 = document.querySelector('#b4')
let door = document.querySelector('.door')
let flower = document.querySelector('.flower')
let window1 = document.querySelector('.window1')
let window2 = document.querySelector('.window2')
let st = document.querySelector('.st')
let b4_mark = document.querySelector('.b4_mark')
console.log(b4);
window.onscroll = function () {
    if (b4.getBoundingClientRect().top < 300 && b4.getBoundingClientRect().top > -300) {
        setTimeout(() => {
            door.style.top = '0'
        }, 1000)
        setTimeout(() => {
            flower.style.top = '0'
            window1.style.left = '15%'
            window2.style.right = '15%'
            st.style.top = '40%'
        }, 1500)

        setTimeout(() => {
            st.style.display = 'none'
            b4_mark.style.display = 'block'
            door.style.width = '110%'
        }, 4500)
    }
}


let draggables = document.querySelectorAll('.b4_imgs')
let isDragging = false; // 用于标记是否在拖拽
let currentElement = null; // 当前拖拽的元素
let offsetX = 0; // 鼠标与元素左侧的偏移
let offsetY = 0; // 鼠标与元素顶部的偏移

// 为每个元素添加事件监听
draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (event) => {
        isDragging = true;
        currentElement = event.target.closest('.b4_imgs'); // 确保获取到父级 div 元素
        currentElement.style.cursor = 'grabbing';

        // 计算偏移量
        const rect = currentElement.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        // 添加全局鼠标事件
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });
});

// 鼠标移动事件
function handleMouseMove(event) {
    if (!isDragging || !currentElement) return;

    // 计算新位置
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    // 更新元素的位置
    currentElement.style.left = `${x}px`;
    currentElement.style.top = `${y}px`;
}

// 鼠标松开事件
function handleMouseUp() {
    if (currentElement) {
        currentElement.style.cursor = 'grab';
    }
    isDragging = false;
    currentElement = null;

    // 移除全局事件监听
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}


let icon2 = document.querySelector('.icon2')
let icon1 = document.querySelector('.icon1')
let b1_mark_title = document.querySelector('.b1_mark_title')
let b1_mark_text = document.querySelector('.b1_mark_text')
let b1_mark_number = document.querySelector('.b1_mark_number')
icon2.onclick = function () {
    b1_mark_text.style.display = 'flex'
    let number = getRandomInt(0, 100)
    b1_mark_title.innerHTML = number
    if (number >= 0 && number <= 34) {
        b1_mark_number.innerHTML = 'This is an ordinary stone.'
        b1_mark_title.style.color = '#ACAEFF'
        b1_mark_number.style.color = '#ACAEFF'
    } else if (number >= 35 && number <= 75) {
        b1_mark_number.innerHTML = 'This is a really Tai hu stone!'
        b1_mark_title.style.color = '#ABDFFF'
        b1_mark_number.style.color = '#ABDFFF'
    } else if (number >= 76 && number <= 100) {
        b1_mark_number.innerHTML = 'This is a total work of art!'
        b1_mark_title.style.color = '#FFF38D'
        b1_mark_number.style.color = '#FFF38D'
    }
}
icon1.onclick = function () {
    b1_mark_text.style.display = 'none'
}

function getRandomInt(min, max) {
    return (Math.random() * (max - min + 1) + min) | 0;
}


let b6_text = document.querySelector('.b6_text')
let img_list = document.querySelectorAll('.img_list')
for (let i = 0; i < img_list.length; i++) {
    img_list[i].onclick = function () {
        switch (i) {
            case 0:
                b6_text.innerHTML = 'The "Dao" is the origin of all things in the universe, an invisible and nameless force.\n' +
                    'In the Tao Te Ching, it says: "The Dao gives birth to One, One gives birth to Two, Two gives birth to Three, and Three gives birth to all things.”'
                break

            case 1:
                b6_text.innerHTML = 'The "Dao" is formless and unseen, while the things born from it are tangible and specific. Laozi advocates for "wu wei" (non-action), emphasizing governance and living by aligning with the invisible Dao and following nature.'
                break
            case 2:
                b6_text.innerHTML = '"Benefit comes from what is present, but usefulness arises from what is absent."\n' +
                    'Tangible things bring practical benefits, but it is the empty spaces, the intangible, that enable them to function.'
                break
            case 3:
                b6_text.innerHTML = 'While material objects are fleeting and ever-changing, the formless Dao is eternal and unchanging.'
                break
            case 4:
                b6_text.innerHTML = 'In The Equality of Things, Zhuangzi argues that the forms and boundaries of all things are relative, and there are no absolute distinctions between them. He stresses that the human mind should transcend physical limitations to achieve unity with the formless Dao.\n'
                break
        }
    }
}


let about_mark = document.querySelector('.about_mark')
let btn = document.querySelector('.btn')
about_mark.onclick = function () {
    this.style.display = 'none';
}
btn.onclick = function () {
    about_mark.style.display = 'block';
}
