// HTML 문서에서 id가 "one"인 요소를 선택하여 num1 변수에 할당
const num1 = document.getElementById("one")

// HTML 문서에서 id가 "two"인 요소를 선택하여 num2 변수에 할당
const num2 = document.getElementById("two")

// HTML 문서에서 id가 "dummy1"인 요소를 선택하여 dummy1 변수에 할당
const dummy1 = document.getElementById("dummy1")

// HTML 문서에서 id가 "dummy2"인 요소를 선택하여 dummy2 변수에 할당
const dummy2 = document.getElementById("dummy2")

// 요소의 표시 여부를 변경하는 함수. bol이 true이면 요소를 표시하고, false이면 숨김.
const Change = (Here, bol) => {
    bol ? Here.style.display = "block" : Here.style.display = "none";
}

// num1 요소에 클릭 이벤트 리스너 추가. 클릭 시 dummy1 요소를 표시하고 dummy2 요소를 숨김.
num1.addEventListener("click", () => {
    Change(dummy1, true)
    Change(dummy2, false)
})

// num2 요소에 클릭 이벤트 리스너 추가. 클릭 시 dummy1 요소를 숨기고 dummy2 요소를 표시.
num2.addEventListener("click", () => {
    Change(dummy1, false)
    Change(dummy2, true)
})

// HTML 문서에서 id가 "NO.10"인 요소를 선택하여 link10 변수에 할당
const link10 = document.getElementById("NO.10")
// link10 요소에 클릭 이벤트 리스너 추가. 클릭 시 지정된 URL을 새 창으로 엶.
link10.addEventListener('click', function () {
    window.open('https://impactlibrary.net/entry/UN-SDGs-goal-10?category=411335')
})

// HTML 문서에서 id가 "NO.14"인 요소를 선택하여 link14 변수에 할당
const link14 = document.getElementById("NO.14")
// link14 요소에 클릭 이벤트 리스너 추가. 클릭 시 지정된 URL을 새 창으로 엶.
link14.addEventListener('click', function () {
    window.open('https://impactlibrary.net/entry/UN-SDGs-goal-14?category=411335')
})

// HTML 문서에서 id가 "NO.4"인 요소를 선택하여 link4 변수에 할당
const link4 = document.getElementById("NO.4")
// link4 요소에 클릭 이벤트 리스너 추가. 클릭 시 지정된 URL을 새 창으로 엶.
link4.addEventListener('click', function () {
    window.open('https://impactlibrary.net/entry/UN-SDGs-goal-4?category=411335')
})

// "pop.html" 파일을 새 창으로 엶. 창의 크기와 위치를 지정.
window.open("pop.html", "", "width=300pxleft=400px top=100px")
