import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: sample(['0x0472ec0185ebb8202f3d4ddb0226998889663cf2']),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['successfull', 'failed']),
  role: sample(['2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z']),
}));

export default users;
