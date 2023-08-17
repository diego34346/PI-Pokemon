const validations = (input) => {
  let errors = {};

  if (input.name.length > 15){
    errors.name= `"Name" Must be less than 15 characters`
  }
  if (!input.name) {
    errors.name = `"Name" can't by empty`;
  }


  if (!input.hp) {
    errors.hp = `"Life" can't by empty`;
  }
  if (input.hp > 250) {
    errors.hp = `"Life" Must be less than 250`;
  }
  if (input.hp < 0) {
    errors.hp = `"Life" Must be greater than 0`;
  }


  if (!input.attack) {
    errors.attack = `"Attack" can't by empty`;
  }
  if (input.attack > 250) {
    errors.attack = `"Attack" Must be less than 250`;
  }
  if (input.attack < 0) {
    errors.attack = `"Attack" Must be greater than 0`;
  }


  if (!input.defense) {
    errors.defense = `"Defense" can't by empty`;
  }
  if (input.defense > 250) {
    errors.defense = `"Defense" Must be less than 250`;
  }
  if (input.defense < 0) {
    errors.defense = `"Defense" Must be greater than 0`;
  }


  if (!input.speed) {
    errors.speed = `"Speeed" can't by empty`;
  }
  if (input.speed > 250) {
    errors.speed = `"Speeed" Must be less than 250`;
  }
  if (input.speed < 0) {
    errors.speed = `"Speeed" Must be greater than 0`;
  }


  if (!input.height) {
    errors.height = `"Height" can't by empty`;
  }
  if (input.height > 3000) {
    errors.height = `"Height" Must be less than 3000`;
  }
  if (input.height < 0) {
    errors.height = `"Height" Must be greater than 0`;
  }


  if (!input.weight) {
    errors.weight = `"Weight" can't by empty`;
  }
  if (input.weight > 3000) {
    errors.weight = `"Weight" Must be less than 3000`;
  }
  if (input.weight < 0) {
    errors.weight = `"Weight" Must be greater than 0`;
  }


  if (!input.type1){
    errors.type1 = `"Type" can't by empty`
  }

  return errors;
};

export default validations;
