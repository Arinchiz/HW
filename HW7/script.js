class Contacts {
    constructor(FIO, age, phone, email) {
      this.FIO = FIO;
      this.age = age;
      this.phone = phone;
      this.email = email;
      this.allcontacts = [];
    }
  
    addContact() {
      const new_name = prompt("Введите ваше ФИО:");
      const new_age = parseInt(prompt("Введите ваш возраст:"));
      if (new_age <= 17) {
        alert("Пользователю меньше 18 лет! Дальнейшие действия невозможны.")
      } else {
        const new_phone = prompt("Введите номер вашего телефона:");
        const new_email = prompt("Введите адрес вашей эл.почты:");
        this.allcontacts.push({ FIO: new_name, age: new_age, phone: new_phone, email: new_email });
      }
    }
  
    showAllContacts() {
      for (let obj of this.allcontacts) {
        console.log(obj.FIO, obj.age, obj.phone, obj.email);
      }
    }
  
    showCurrentContact() {
      let Input = prompt("Введите ФИО человека, информацию о котором желаете найти:");
      let foundObject = null;
      for (let obj of this.allcontacts) {
        if (obj.FIO === Input) {
          foundObject = obj;
          break;
        }
      }
      if (foundObject) {
        console.log("ФИО:", foundObject.FIO);
        console.log("Возраст:", foundObject.age);
        console.log("Номер телефона:", foundObject.phone);
        console.log("Адрес эл.почты:", foundObject.email);
      } else {
        console.log("Объект с указанным названием не найден.");
      }
    }
  }
  
  const New_Contacts = new Contacts();
  New_Contacts.addContact();
  New_Contacts.addContact();
  New_Contacts.showAllContacts();
  New_Contacts.showCurrentContact();
  