function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Italo', 'Admin');
usuarios.set('Madson', 'Admin');
usuarios.set('Estefano', 'User');
usuarios.set('Gabriel', 'Admin');

console.log(getAdmins(usuarios));