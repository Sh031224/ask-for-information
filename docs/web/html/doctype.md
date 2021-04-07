---
id: web-html-doctype
title: DOCTYPE 선언
---

## DOCTYPE 이란

`doctype` 선언은 어떤 버전의 HTML 문서로 작성했는지 브라우저에게 알려주는 것으로 웹 브라우저가 내용을 올바르게 출력하도록 도와주는 역할을 합니다.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>제목</title>
	</head>
	<body></body>
</html>
```

## 버전별 선언 방법

`html5`

```html
<!DOCTYPE html>
```

`html4.0.1 Strict`

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

`html4.0.1 Transitional`

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

`html4.0.1 Frameset`

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

`XHTML 1.0 Strict`

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
