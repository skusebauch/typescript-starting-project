//const person: {
//  name: string;
//  age: number;
//} = {
//  name: "Sven",
//  age: 29
//}
// typescript is going to do this for us

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Sven",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favortieActivities: string[];
favortieActivities = ["Sports", "Cooking"];

console.log(person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});

if (person.role === Role.ADMIN) {
  console.log("This is a Admin");
}
