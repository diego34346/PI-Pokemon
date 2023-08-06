const validations = (input) => {
  let validate = {};
  
  if (!input.name) {
      validate.name = 'Name is necessary';
  }

  if (input.hp > 255 || !input.hp) {
      validate.hp = 'Life is necessary and less than 255';
  }

  if (input.attack > 255 || !input.attack ) {
      validate.attack = 'Attack is necessary and less than 255';
  }

  if (input.defense > 255 || !input.defense) {
      validate.defense = 'Defense is necessary and less than 255';
  }

  if (input.speed > 255 || !input.speed) {
      validate.speed = 'Speed is necessary and less than 255';
  }

  if (!input.height) {
      validate.height = 'Height is necessary';
  };

  if (!input.weight) {
      validate.weight = 'Weight is necessary';
  }

  return validate;
};

export default validations;