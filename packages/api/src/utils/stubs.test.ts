/* Stubs for tests */

import { createStubInstance, define } from 'sinon';
import { DataSource, EntityManager } from 'typeorm';

export function getDataSourceStubs() {
  const dataSourceStub = createStubInstance(DataSource);
  const entityManagerStub = createStubInstance(EntityManager);

  define(dataSourceStub, 'manager', entityManagerStub);
  return { dataSourceStub, entityManagerStub };
}
