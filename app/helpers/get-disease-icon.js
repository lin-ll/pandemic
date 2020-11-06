import { helper } from '@ember/component/helper';

export default helper(function getDiseaseIcon([status]) {
  if (status == 0) return 'skull';
  if (status == 1) return 'vial';
  if (status == 2) return 'ban';
  return '';
});
