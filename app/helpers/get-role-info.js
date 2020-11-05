import { helper } from '@ember/component/helper';
import { ROLES } from '../utils/constants';

export default helper(function getRoleInfo([roleId]) {
  return [...ROLES].find((role) => role.id === roleId);
});
