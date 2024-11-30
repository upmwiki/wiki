#include <iostream>

class A {
public:
    virtual int foo() {
        return 1;
    }
};

class B : public virtual A {};
class C : public virtual A {};
class D : public B, public C {};

int main() {
    D d;
    std::cout << d.foo();
    return 0;
}