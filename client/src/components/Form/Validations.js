const validations = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = `"Name" can't by empty`;
  }

  if (!input.hp) {
    errors.hp = `"Life" can't by empty`;
  }
  if (input.hp > 250) {
    errors.hp = `Must be less than 150`;
  }

  if (!input.attack) {
    errors.attack = `"Attack" can't by empty`;
  }
  if (input.attack > 250) {
    errors.attack = `Must be less than 150`;
  }

  if (!input.defense) {
    errors.defense = `"Defense" can't by empty`;
  }
  if (input.defense > 250) {
    errors.defense = `Must be less than 150`;
  }

  if (!input.speed) {
    errors.speed = `"Speeed" can't by empty`;
  }
  if (input.speed > 250) {
    errors.speed = `Must be less than 150`;
  }

  if (!input.height) {
    errors.height = `"Height" can't by empty`;
  }

  if (!input.weight) {
    errors.weight = `"Weight" can't by empty`;
  }
  if (!input.type1){
    errors.type1 = `"Type" can't by empty`
  }


  return errors;
};

export default validations;
