---
title: formspree
---

# formspree
[formspree](https://formspree.io/)는 static site의 form에서 submit한 field값들을 내 email로 보내주는 서비스입니다.

예제.
```xml
<form action="https://formspree.io/email@domain.tld" method="POST">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>
```

# formspree사용하는 법

1. form tag의 action에 다음의 주소를 입력합니다. (method는 "POST"선택해주세요.)
2. form(i.e. <input>, <select>, <textare>)에 name attribut를 추가합니다.
3. submit을 하면 email confirm화면이 보이고, email을 확인하면 form의 값이 email로 전송이 될 것 입니다.





```
<form action="https://formspree.io/email@domain.tld" method="POST" />
```



```
<input type="text" name="name">
```
