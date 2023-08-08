const validations = (input) => {
  let validate = {};

  if (!input.name) {
    validate.name = `"Name" can't by empty`;
  }

  if (!input.hp) {
    validate.hp = `"Life" can't by empty`;
  }
  if (input.hp > 200) {
    validate.hp = "Must be less than 200";
  }

  if (!input.attack) {
    validate.attack = `"Attack" can't by empty`;
  }
  if (input.attack > 200) {
    validate.attack = `Must be less than 200`;
  }

  if (!input.defense) {
    validate.defense = `"Defense" can't by empty`;
  }
  if (input.defense > 200) {
    validate.defense = `Must be less than 200`;
  }

  if (!input.speed) {
    validate.speed = `"Speeed" can't by empty`;
  }
  if (input.speed > 200) {
    validate.speed = `Must be less than 200`;
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
