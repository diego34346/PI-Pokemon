const validations = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = `"Name" can't by empty`;
  }

  if (!input.hp) {
    errors.hp = `"Life" can't by empty`;
  }
  if (input.hp > 150) {
    errors.hp = `"Life" Must be less than 150`;
  }

  if (!input.attack) {
    errors.attack = `"Attack" can't by empty`;
  }
  if (input.attack > 150) {
    errors.attack = `"Attack" Must be less than 150`;
  }

  if (!input.defense) {
    errors.defense = `"Defense" can't by empty`;
  }
  if (input.defense > 150) {
    errors.defense = `"Defense" Must be less than 150`;
  }

  if (!input.speed) {
    errors.speed = `"Speeed" can't by empty`;
  }
  if (input.speed > 150) {
    errors.speed = `"Speeed" Must be less than 150`;
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
