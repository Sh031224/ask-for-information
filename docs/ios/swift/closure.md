---
id: closure
title: Closure
---

 ### 클로저의 세 가지 형태
 1. 이름이 있으면서 어떤 값도 획득하지 않는 전역함수의 형태
 2. 이름이 있으면서 다른 함수 내부의 값을 획득할 수 있는 중첩된 함수의 형태
 3. 이름이 없고 주변 문맥에 따라 값을 획득할 수 있는 축약 문법으로 작성한 형태
 
 ### 클로저의 특징
 - 클로저는 매개변수와 반환 값의 타입을 문맥을 통해 유추할 수 있음 -> 매개변수와 반환 값의 타입 생략가능
 - 클로저에 단 한 줄의 표현만 들어있다면 암시적으로 이를 반환 값으로 취급 -> 'return'키워드 생략가능
 - 축약된 전달인자 이름 사용가능 ($0, $1, ...)
 - 후행 클로저 문법 사용가능 ( example.sorted() { ... } )
 - 클로저는 메소드에서 요구하는 형태로 전달해야함 (매개변수 타입이나 개수, 반환 타입이 같아야 전달인자로서 전달가능)
 
 ### 클로저 표현 방법
 - 기본 클로저 표현
 - 후행 클로저 표현
 - 클로저 표현 간소화

### 기본 클로저
- 클로저에 여러줄의 표현이 들어가게 된다면 가급적 사용X (가독성을 해침)

```swift
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]

func backwards(s1: String, s2: String) -> Bool {
    return s1 > s2
}

// sorted(by: <#T##(String, String) throws -> Bool#>

let sorted: [String] = names.sorted(by: backwards)
print(sorted)

// backwards(s1:s2:) 함수를 클로저 표현으로 대체
let reversed1 = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})
print(reversed1)
```

### 후행 클로저
- 클로저에 여러줄의 표현이 들어가게 된다면 사용 (가독성이 좋음)
- 마지막 전달인자로 전달되는 클로저에만 해당 (맨 마지막 클로저만 후행 클로저 사용가능)
- 단 하나의 클로저만 전달인자로 전달하는 경우 소괄호 생략가능

```swift
var reversed2 = names.sorted() { (s1: String, s2: String) -> Bool in
    return s1 > s2
}

// 메소드의 소괄호 생략가능
reversed2 = names.sorted { (s1: String, s2: String) -> Bool in
    return s1 > s2
}
print(reversed2)
```

### 클로저 간소화

1. 문맥을 이용한 타입 유추
    - 클로저는 이미 메소드에 적합한 타입을 준수하고 있기에 문맥에 따라 적절히 타입 유추가능
    - 타입 유추가 가능하기에 매개변수 타입과 반환 타입 생략 가능

```swift
// sorted(by: <#T##(String, String) throws -> Bool#> '두 개의 String 매개변수 타입, 한 개의 Bool 반환타입'으로 형태를 명시

var reversed = names.sorted(by: { (s1, s2) in
    return s1 > s2
})
```

2. 단축 인자 이름
    - 매개변수의 이름을 명시하지 않고도 '$'와 숫자(0, 1, ...)의 조합($0, $1, ...)으로 단축인자 이름을 사용가능
    - 매개변수의 이름을 명시하지 않아도 되기에 'in'키워드 생략 가능

```swift
reversed = names.sorted(by: {
    return $0 > $1
})
```

3. 암시적 반환 표현
    - 클로저가 반환값을 갖고, 클로저 내부의 실행문이 한 줄이라면, 암시적으로 해당 실행문을 반환 값으로 사용가능
    - 즉 'return'키워드 생략 가능

```swift
reversed = names.sorted(by: {
    $0 > $1
})
```

4. 연산자 함수
    - 클로저는 매개변수의 타입과 반환 타입이 연산자를 구현한 함수의 모양과 동일하다면 연산자만 표기하더라도 알아서 연산하고 반환
    - 연산자는 일종의 함수
    - 연산자 정의 == ```public func<T : Comparable>(lhs: T, rhs: T) -> Bool```
    - 연산자 함수를 클로저의 역할로 사용

```swift
reversed = names.sorted(by: >)
```

### 클로저 간소화 과정

```swift
reversed = names.sorted(by: { (s1: String, s2: String) -> Bool in return s1 > s2 })

reversed = names.sorted(by: { (s1, s2) -> Bool in return s1 > s2 })

reversed = names.sorted(by: { s1, s2 in return s1 > s2 })

reversed = names.sorted(by: { s1, s2 in s1 > s2 })

reversed = names.sorted(by: { $0 > $1 })

reversed = names.sorted(by: > )
```