// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  // Ваш код

  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return undefined; // Якщо людину не знайдено 
}

module.exports = findByName;