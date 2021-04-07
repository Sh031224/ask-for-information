---
id: web-html-doctype
title: DOCTYPE 선언
---

## DOCTYPE 이란

`DOCTYPE` 은 document type의 약어입니다. `DOCTYPE` 은 항상 DTD(Document Type Definition)와 관련됩니다.

`DTD` 는 특정 문서가 어떻게 구성되어야 하는지 정의합니다(예시: button은 span을 포함할 수 있지만, div는 그럴 수 없다.)

반면, `DOCTYPE` 은 문서가 대략 존중할만한 `DTD` 를 선언합니다. (예시: 이 문서는 HTML DTD를 존중한다.)

웹 페이지의는 `DOCTYPE` 선언이 필요합니다. 유저 에이전트에게 문서가 존중하는 HTML 사양의 버전을 알리는데 사용됩니다.

유저 에이전트가 올바른 **DOCTYPE**을 인식하면, 문서를 읽는데에 DOCTYPE과 일치하는 `no-quirks mode`를 트리거합니다. 유저 에이전트가 올바른 DOCTYPE을 인식하지 못하면, `quirks mode`를 트리거합니다.

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
