---
title: search-form
---

# search 폼

## HTML

검색폼을 생성하고 submit버튼을 클릭했을때 formsree를 통해서 email로 form에 입력한 값을 전달하도록 구성했습니다.

```html
<form
  action="https://formspree.io/sundlee@gmail.com"
  method="POST"
  class="search-form"
>
  <fieldset>
    <legend>검색 폼</legend>
    <label for="search">검색어</label>
    <input
      required
      type="text"
      id="search"
      name="keyword"
      placeholder="검색어를 입력하세요."
    />
    <button class="btn-search" type="submit">검색</button>
  </fieldset>
</form>
```

## CSS

"Spoqa Han Sans" 폰트를 사용하고, 웹 브라우저간 일관성을 위해서 normalize와 reset을 적용했습니다.

```html
<link rel="stylesheet" href="css/webcafe.css" />
```

```css
@charset "utf-8";
@import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@import url("normalize.css");
@import url("reset.css");

/* 기본 스타일 */
html {
  font-size: 10px;
}
body {
  font-family: "Spoqa Han Sans", "Sans-serif";
  font-weight: 400;
  font-size: 1.4rem;
  color: #181818;
  background: #fff;
}
a {
  color: inherit;
  text-decoration: none;
}
```
