import { helper } from '@ember/component/helper';

export default helper(function uppercase([s]) {
  return s.toUpperCase();
});
