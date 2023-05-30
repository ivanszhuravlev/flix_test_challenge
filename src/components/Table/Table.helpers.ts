import {EntityWithID} from '../../data/data.model';
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
  sortDataByField: function (data: EntityWithID<any[]>[], field: string) {
    const heading = data[0];
    const rest = data.slice(1);

    const fieldIndex = heading.data.indexOf(field);

    if (fieldIndex < 0) {
      return data;
    }

    const sorted = [...rest].sort((a, b) => {
      if (a.data[fieldIndex] > b.data[fieldIndex]) {
        return 1;
      }
      if (a.data[fieldIndex] < b.data[fieldIndex]) {
        return -1;
      }
      return 0;
    });

    return [heading, ...sorted];
  },
  /**
   * Search implementation is rather straightforward:
   * We concatenate all the values in a row to a single value and search for a subsrt in this value.
   */
  filterBySearchQuery: function (data: EntityWithID<any[]>[], query: string) {
    const heading = data[0];
    const rest = data.slice(1);

    const filtered = rest.filter(row => {
      const values = row.data.join('');

      return values.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });

    return [heading, ...filtered];
  },
};
