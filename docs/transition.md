---
title: css transition
---

# CSS Transition 활용 TIP (부드러운 움직임)


## Transition
속성값의 변화 중간과정을 CSS가 만들어 부드러운 움직임을 나타내는 기능(IE 10+)
속성값이 변화하는 경우에만 동작하므로

```css
transition:all 500ms linear;
transition:(css속성명) (변화시간) (변화타입) (딜레이시간);
ex)
transition:all 300ms linear;
transition:transform 0.5s easy-in-out;
transition:opacity 200ms linear 100ms, left 200ms 20
```

속성명을 입력하지 않거나 all 인 경우 모든 속성
변화하고 싶은 속성만 골라서 사용 ex) width, left, opacity 등등
( 모든 속성은 느려지거나 원하지 않는 동작까지 반영 될 수 있으니 사용자제)
transform 속성은 transform 하나로 모두 반영
변화시간은 ms( 밀리세컨트 ), s( 세컨드 ) 사용가능
변화 타입은 기본값( 선형 linear ), 크롬개발자 도구에서 변경 가능


## 활용
transition 은 html 요소에 css style이 변화된다면 거의 모든 기능에 적용할 수 있습니다.

### 자바스크립트 이용
대표적인 방법으로 class 명의 변화를 주어 적용하는 방법입니다.

```css
.sample-class .side-menu{
    position: absolute;
    top: 0;
    width:250px;
    left:-250px;
    height: 100%;
    background: #85a3dc;
    padding:20px;
    transform:translate(0,0);
    transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.sample-class.menuon .side-menu{
    transform:translate(250px,0);
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,0.3);
}
```

HTML
```html
<div class="sample-area sample-class">
  <div class="head">
    <div class="btn-menu">
      <i class="fas fa-bars"></i>
    </div>
  </div>
  <div class="side-menu">
    <div class="menu-body">
      <span>메뉴</span>
    </div>
    <div class="btn-menu">
      <i class="fas fa-times"></i>
    </div>
  </div>
</div>
```


JAVASCRIPT(vanilaJS Version)
```js
<script type="text/javascript">
document.querySelector(".sample-class .btn-menu").addEventListener("click",function(e){
        document.querySelector(".sample-class").classList.toggle("menuon");
});
</script>
```

JAVASCRIPT(jquery Version)
```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
    $(".sample-class .btn-menu").on("click",function(){
        $(".sample-class").toggleClass("menuon");
    });
});
</script>
```


2-2) 자바스크립트 이용하지 않고 변화를 주는 방법
2-2-1) 크롬 개발자 도구의 hover에서 확인 할 수 있는 가상 선택자들

:hover - 마우스 오버 ( 모바일 터치, 터치후 다른영역 터치 시 까지 유지 )
:active - 마우스 클릭( 누르고있는 동안에만 유지 )
( 모바일 터치하고 있는 동안에만 유지 )
:focus - 각종 input 뿐아니라 tab 으로 이동하여 element 요소들이 포커스 되어있는 상태
:focus-within - focus 가 되어있는 element 의 상위 요소에서 사용. 하위요소에 포커스가 있는 경우 포커스 유무로 변화를 줄 수 있습니다.
2-1-2) :checked+ html input 태그 중 checkbox, radio등의 checked 상태 사용가능한 요소와 + 연산자를 이용한 활용 방법