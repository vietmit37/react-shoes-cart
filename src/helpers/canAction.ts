import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import { ROLE } from '../config';

function defineAbilitiesFor(role: string) {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

  /*
CRUD = create, read, update, delete, view

*/

  switch (role) {
    case ROLE.ADMIN: {
      can(['create', 'update', 'read', 'delete', 'view'], 'all');
      break;
    }
    case ROLE.OWNER: {
      cannot('delete', 'User');
      break;
    }
    case ROLE.OPERATOR: {
      cannot('view', 'button-add-to-cart');
      break;
    }
    default:
      break;
  }

  return build();
}

export const canAction = (action: string, resource: string) => {
  const role = window.localStorage.getItem('role');
  if (!role) return false;

  const ability = defineAbilitiesFor(role);
  return ability.can(action, resource);
};
