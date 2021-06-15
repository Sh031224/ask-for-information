---
id: arc
title: ARC(Automatic Reference Counting)
---

- **ARC(Automatic Reference Counting)**
    - **자동 참조 카운팅으로서 자동으로 메모리를 관리해주는 방식**
    - **참조 카운팅이 0이 될때만 메모리에서 해제됨**
    - **동작원리:**
        - 클래스의 새로운 인스턴스를 만들 때 인스턴스의 정보를 저장하기 위해 메모리를 할당함
        - 인스턴스가 더 이상 사용되지 않는다고 판단 → 메모리 해제
        - 참조되는 프로퍼티의 갯수를 카운팅하여 모든 변수가 인스턴스를 해제하기 전에는 메모리에서 해제 안함
    - **컴파일 시점에 동작한다.**
    - **GC와의 차이점**
        - 컴파일 당시 이미 인스턴스의 해제 시점이 정해져 있음 (예측 가능)
        - 위와 같은 이유로 인해 메모리 관리를 위한 시스템 자원을 추가할 필요가 없음
    - **Weak, unowned, Strong**
        - Strong (강한 참조)
            - 객체를 소유하여 레퍼런스 카운트가 증가하는 프로퍼티
        - Weak (약한 참조)
            - 객체를 소유하지 않고 주소값만을 가지고 있는 포인터 개념
            - 자신이 참조하지만 메모리를 해제시킬 수 있는 권한은 다른 클래스에 있음
            - 값 지정시 리테인 발생 안함 → 언제 메모리가 해제될 지 알 수 없음
            - 메모리가 해제될 경우 자동으로 레퍼런스가 nil로 초기화함 → 항상 옵셔널타입이여야 함
        - Unowned(미소유 참조)
            - nil이 될수가 없음 → 옵셔널타입 X
            - 해제된 메모리 영역을 접근하지 않는다는 확실한 경우에만 사용

### ARC 코드 예시

`Person`
``` swift
class Person {
    let name: String
    init(name: String) {
        self.name = name
        println("\(name) is being initialized")
    }

    deinit {
        println("\(name) is being deinitialized")
    }
}
```

``` swift
// Person 클래스 타입을 갖는 reference 변수 3개를 선언. 모두 옵셔널 변수이므로 초기값은 nil을 갖고 있습니다.
var reference1: Person?
var reference2: Person?
var reference3: Person?

//reference1 변수에 Person 인스턴스 생성하여 참조하게됩니다.
reference1 = Person(name: "John Appleseed")

//나머지 두 변수를 reference1를 참조하게 합니다.
reference2 = reference1
reference3 = reference1

/*이시점의 인스턴스에 대한 참조 횟수는 3이된다. 그런 후 reference1, reference2 참조 해지합니다.
그렇게 되면 Person 인스턴스에 대한 참조 횟수는 아직 1이어서 Person 인스턴스는 해지되지 않습니다.*/
reference1 = nil
reference2 = nil

/*
Pesron 인스턴스를 참조하고 있는 나머지 변수 refernce3의 참조 해지하면
더이상 Person 인스턴스를 참조하고 있는 것이 없으므로 ARC가 Person 인스턴스 메모리를 해지합니다.
*/
reference3 = nil
```
