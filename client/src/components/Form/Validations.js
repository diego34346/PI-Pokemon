const validations = (input) => {
  let validate = {};

  if (!input.name) {
    validate.name = `"Name" can't by empty`;
  }

  if (!input.hp) {
    validate.hp = `"Life" can't by empty`;
  }
  if (input.hp > 150) {
    validate.hp = `"Life" Must be less than 150`;
  }

  if (!input.attack) {
    validate.attack = `"Attack" can't by empty`;
  }
  if (input.attack > 150) {
    validate.attack = `"Attack" Must be less than 150`;
  }

  if (!input.defense) {
    validate.defense = `"Defense" can't by empty`;
  }
  if (input.defense > 150) {
    validate.defense = `"Defense" Must be less than 150`;
  }

  if (!input.speed) {
    validate.speed = `"Speeed" can't by empty`;
  }
  if (input.speed > 150) {
    validate.speed = `"Speeed" Must be less than 150`;
  }

  if (!input.height) {
    validate.height = `"Height" can't by empty`;
  }

  if (!input.weight) {
    validate.weight = `"Weight" can't by empty`;
  }

  return validate;
};

export default validations;
