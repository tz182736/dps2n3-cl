import Dexie from 'dexie';

// Create a Dexie database with a table for people
const db = new Dexie('PeopleDB');
db.version(1).stores({
    people: 'id,name,email',
});

// Use a table to add a new person to the object store
db.table('people')
    .add({ id: 1, name: 'Alice', email: 'alice@example.com' })
    .then(() => {
        console.log('Added Alice to people');
    });

// Use a table to update an existing person in the object store
db.table('people')
    .update(1, { email: 'alice@new.com' })
    .then(() => {
        console.log(`Updated Alice's email`);
    });

// Use a table to delete a person from the object store
db.table('people')
    .delete(1)
    .then(() => {
        console.log('Deleted Alice from people');
    });

/// collection is query
// Use a collection to get all the people with name starting with A
db.table('people')
    .where('name')
    .startsWith('A')
    .toArray()
    .then((people) => {
        console.log('People with name starting with A:', people);
    });

// Use a collection to get the first person with name equal to Bob
db.table('people')
    .where('name')
    .equals('Bob')
    .first()
    .then((person) => {
        console.log('First person with name Bob:', person);
    });

// Use a collection to modify all the people with email ending with @example.com
db.table('people')
    // require index on property .where('email').endsWith('@example.com') 
    .filter((person) => person.name.endsWith('e'))
    .modify({ email: 'changed@example.com' })
    .then(() => {
        console.log('Modified email for people ending with @example.com');
    });