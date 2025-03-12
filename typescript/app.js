"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Denis',
    surname: 'Yurchenko',
    city: 'Chernihiv',
    age: 34,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
