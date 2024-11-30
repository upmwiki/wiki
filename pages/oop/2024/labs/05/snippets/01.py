import json

# Класс Person
class Person:
    def __init__(self, person_id, name, age):
        self.person_id = person_id
        self.name = name
        self.age = age
    def to_dict(self):
        return {"person_id": self.person_id, "name": self.name, "age": self.age}
    @staticmethod
    def from_dict(data):
        return Person(data["person_id"], data["name"], data["age"])

# Класс Address
class Address:
    def __init__(self, street, city, zip_code):
        self.street = street
        self.city = city
        self.zip_code = zip_code
    def to_dict(self):
        return {"street": self.street, "city": self.city, "zip_code": self.zip_code}
    @staticmethod
    def from_dict(data):
        return Address(data["street"], data["city"], data["zip_code"])

# Класс Family (связывает объекты Person и Address)
class Family:
    def __init__(self, family_name, members=None, address=None):
        self.family_name = family_name
        self.members = members if members else []
        self.address = address
    def to_dict(self):
        return {
            "family_name": self.family_name,
            "members": [member.to_dict() for member in self.members],
            "address": self.address.to_dict() if self.address else None,
        }
    @staticmethod
    def from_dict(data):
        members = [Person.from_dict(member) for member in data["members"]]
        address = Address.from_dict(data["address"]) if data["address"] else None
        return Family(data["family_name"], members, address)

# Создание объектов
person1 = Person(1, "Alice", 30)
person2 = Person(2, "Bob", 35)
address = Address("123 Main St", "Metropolis", "12345")
family = Family("Smith", [person1, person2], address)

# Сериализация
serialized_data = json.dumps(family.to_dict(), indent=4)
print("Сериализованный JSON:\n", serialized_data)

# Десериализация
deserialized_family = Family.from_dict(json.loads(serialized_data))

# Вывод данных после десериализации
print("\nДесериализованные данные:")
print(f"Family Name: {deserialized_family.family_name}")
print("Members:")
for member in deserialized_family.members:
    print(f" - ID: {member.person_id}, Name: {member.name}, Age: {member.age}")
if deserialized_family.address:
    print(f"Address: {deserialized_family.address.street}, {deserialized_family.address.city}, {deserialized_family.address.zip_code}")