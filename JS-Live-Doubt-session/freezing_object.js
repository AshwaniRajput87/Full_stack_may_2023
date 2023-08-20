/***
 *  - To make the object immutable(can't modify the object) then Object.freeze() can be used;
 *  - db config objects(dbConfig) -> shouldn't be changed -> let config = Object.freeze(dbCongig);
 */

const dbConfig = {
    dbUrl: 'https://myaql:3306/login',
    username: 'Ashwin',
    password: 'Ashwain@16'
}

const config = Object.freeze(dbConfig);

console.log(Object.isFrozen(config));

config.username = "Ashwani";

delete config.password;

console.log(config);