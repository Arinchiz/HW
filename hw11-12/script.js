class User {
    constructor(userData) {
        this.data = {
            id: userData.id || this.generateId(),
            name: userData.name || "",
            email: userData.email || "",
            address: userData.address || "",
            phone: userData.phone || "",
        };
    }

    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 5);
    }

    edit(obj) {
        Object.assign(this.data, obj);
    }
}

class Contacts {
    constructor() {
        this.data = this.loadFromLocalStorage() || [];
    }

    saveToLocalStorage() {
        localStorage.setItem("contacts", JSON.stringify(this.data));
    }

    loadFromLocalStorage() {
        const storedData = localStorage.getItem("contacts");
        return storedData ? JSON.parse(storedData) : [];
    }

    add(userData) {
        const user = new User(userData);
        this.data.push(user);
        this.saveToLocalStorage();
    }

    edit(name, obj) {
        const user = this.data.find((contact) => contact.data.name === name);
        if (user) {
            const updatedUserData = {
                name: obj.name || user.data.name,
                email: obj.email || user.data.email,
                address: obj.address || user.data.address,
                phone: obj.phone || user.data.phone,
            };
            user.edit(updatedUserData);
            this.saveToLocalStorage();
        }
    }

    remove(name) {
        this.data = this.data.filter((contact) => contact.data.name !== name);
        this.saveToLocalStorage();
    }

    search(name) {
        return this.data.filter((contact) => contact.data.name.includes(name));
    }
}

class ContactsApp extends Contacts {
    
        constructor() {
            super();
            this._storageExpirationKey = "storageExpiration";
            this._initializeStorageExpiration();
            this.createInterface();
        }
    
        get storage() {
            return this._loadFromLocalStorage();
        }
    
        set storage(data) {
            this._saveToLocalStorage(data);
            this._updateStorageExpiration();
        }
    
        _initializeStorageExpiration() {
            const expirationDate = this._getExpirationDate();
            if (!localStorage.getItem(this._storageExpirationKey) || expirationDate < new Date()) {
                this._clearStorage();
                this._updateStorageExpiration();
            }
        }
    
        _getExpirationDate() {
            const expirationDays = 10;
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + expirationDays);
            return currentDate;
        }
    
        _updateStorageExpiration() {
            const expirationDate = this._getExpirationDate();
            localStorage.setItem(this._storageExpirationKey, expirationDate.toISOString());
            document.cookie = `${this._storageExpirationKey}=${expirationDate.toISOString()}; expires=${expirationDate.toUTCString()}; path=/`;
        }
    
        _clearStorage() {
            localStorage.removeItem("contacts");
            document.cookie = `${this._storageExpirationKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
    
        _saveToLocalStorage(data) {
            localStorage.setItem("contacts", JSON.stringify(data));
        }
    
        _loadFromLocalStorage() {
            const storedData = localStorage.getItem("contacts");
            return storedData ? JSON.parse(storedData) : [];
        }
    
        createInterface() {
            this.getAndUpdateList();
        }

    createInterface() {
        this.getAndUpdateList();
    }

    showAddForm() {
        const nameToAdd = prompt("Введите имя контакта для добавления:");
        const emailToAdd = this.promptEmail("Введите email:");
        const addressToAdd = prompt("Введите адрес:");
        const phoneToAdd = prompt("Введите телефон:");

        if (nameToAdd && emailToAdd && addressToAdd && phoneToAdd) {
            this.onAdd({
                name: nameToAdd,
                email: emailToAdd,
                address: addressToAdd,
                phone: phoneToAdd,
            });
        } else {
            alert("Введите все необходимые данные");
        }
    }

    showEditForm() {
        const nameToEdit = prompt("Введите имя контакта для редактирования:");
        const contactToEdit = this.data.find((contact) => contact.data.name === nameToEdit);
        if (contactToEdit) {
            const newName = prompt("Введите новое имя:");
            const newEmail = this.promptEmail("Введите новый email:");
            const newAddress = prompt("Введите новый адрес:");
            const newPhone = prompt("Введите новый телефон:");

            this.onEdit(contactToEdit.data.name, {
                name: newName,
                email: newEmail,
                address: newAddress,
                phone: newPhone,
            });
        } else {
            alert("Контакт не найден");
        }
    }

    showRemoveForm() {
        const nameToRemove = prompt("Введите имя контакта для удаления:");
        const contactToRemove = this.data.find((contact) => contact.data.name === nameToRemove);
        if (contactToRemove) {
            this.onRemove(contactToRemove.data.name);
        } else {
            alert("Контакт не найден");
        }
    }

    showSearchForm() {
        const searchTerm = prompt("Введите имя для поиска:");
        if (searchTerm) {
            this.onSearch(searchTerm);
        } else {
            alert("Введите имя для поиска");
        }
    }

    onAdd(contactData) {
        super.add(contactData);
        this.getAndUpdateList();
    }

    onEdit(name, newData) {
        super.edit(name, newData);
        this.getAndUpdateList();
    }

    onRemove(name) {
        super.remove(name);
        this.getAndUpdateList();
    }

    onSearch(name) {
        const searchResult = super.search(name);
        if (searchResult.length > 0) {
            searchResult.forEach((foundContact, index) => {
                alert(`Результат поиска ${index + 1}:\nID: ${foundContact.data.id}\nИмя: ${foundContact.data.name}\nEmail: ${foundContact.data.email}\nАдрес: ${foundContact.data.address}\nТелефон: ${foundContact.data.phone}`);
            });
        } else {
            alert("Контакты не найдены");
        }
    }

    getAndUpdateList() {
        const contactsList = document.getElementById("contactsList");
        contactsList.innerHTML = "";
        this.data.forEach((contact, index) => {
            const contactRow = document.createElement("tr");
            contactRow.innerHTML = `<td>${index + 1}</td><td>${contact.data.id}</td><td>${contact.data.name}</td><td>${contact.data.email}</td><td>${contact.data.address}</td><td>${contact.data.phone}</td>`;
            contactsList.appendChild(contactRow);
        });
    }

    promptEmail(message) {
        let email;
        do {
            email = prompt(message);
            if (email && !email.includes('@')) {
                alert("Некорректный email. Пожалуйста, введите корректный email.");
            }
        } while (email && !email.includes('@'));
        return email;
    }
}

const contactsApp = new ContactsApp();