import { helper } from '@ember/component/helper';

const ICONS = ['skull', 'vial', 'ban'];
export default helper(function getDiseaseIcon([status]) {
  return ICONS[status] || '';
});
