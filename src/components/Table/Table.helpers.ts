import {TableValues, TableDataRaw} from './Table.model';

export const TableHelpers = {
  normalizeData: function () {},
  formatTable: function (tableRaw: TableDataRaw): TableValues {
    const normalizedTable = this.normalizeRawData(tableRaw);
    return [
      this.getTableHeader(normalizedTable),
      ...normalizedTable.map(Object.values),
    ];
  },
  getTableHeader: function (table: TableDataRaw) {
    if (!table?.length) {
      return [];
    }

    return Object.keys(table[0]);
  },
  /**
   * Thie method creates a table from an array of objects.
   * Specifically, it adds a field to a row if it was absent and fills it with ''.
   * @example input: [
   * {a: '1', b: '1', c: '1'},
   * {a: '2', b: '2'},
   * {c: '3', d: '3'},
   * ]
   * output: [
   * {a: '1', b: '1', c: '1', d: ''},
   * {a: '2', b: '2', c: '', d: ''},
   * {a: '', b: '', c: '3', d: '3'},
   * ]
   * @param tableRaw source array
   * @returns the same array with the equal set of fields for each row
   */
  normalizeRawData: function (tableRaw: TableDataRaw): TableDataRaw {
    //TODO

    return tableRaw;
  },
};
