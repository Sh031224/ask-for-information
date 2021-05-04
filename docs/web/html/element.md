---
id: web-html-element
title: HTML 요소 구조
---

## HTML 요소

HTML 요소 (element)는 여러 `속성` 을 가질 수 있습니다.
또한, HTML 요소는 시작 태그로 시작해서 종료 태그로 끝납니다.

```html
...skip
  <body>
    <p class="class">Content</p>
  </body>
</html>
```

Content

## 속성

`<p class="class">` 부분에서 `class` 는 속성을 의미합니다.<br />
속성은 없을 수도 있으며, 여러가지 속성을 추가할 수 있습니다.

## 태그

`<p>` 태그는 본문을 표시하는 태그입니다.<br />
본 태그 안에 내용을 작성할 수 있으며, 닫는 태그 `</p>` 로 끝마칩니다.

하지만 닫는 태그가 없는 경우도 있습니다.

```html
...
<input type="text">
...
```

이럴 때에는 `Self Close 태그`를 사용합니다.

```html
...
<input type="text" />
...
```
