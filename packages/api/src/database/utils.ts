/**
 * @description Apply on_update_timestamp function to given table
 * */
export const onUpdateTrigger = (table: string): string => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `;
