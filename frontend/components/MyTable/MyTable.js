import React from 'react';
import * as Table from 'reactabular-table';
import orderBy from 'lodash/orderBy';
import * as resolve from 'table-resolver';
import * as sort from 'sortabular';
import { compose } from 'redux';
import { doesNotThrow } from 'assert';

export default class MyTable extends React.Component {
  componentDidMount() {}

  constructor(props) {
    super(props);

    const countries = {
      fi: 'Finland',
      dk: 'Denmark'
    };
    const getSortingColumns = () => this.state.sortingColumns || {};
    const sortable = sort.sort({
      // Point the transform to your rows. React state can work for this purpose
      // but you can use a state manager as well.
      getSortingColumns,

      // The user requested sorting, adjust the sorting state accordingly.
      // This is a good chance to pass the request through a sorter.
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumns({
            // sort.byColumn would work too
            sortingColumns: this.state.sortingColumns,
            selectedColumn
          })
        });
      },

      // Use property strategy over index one given we have nested data
      strategy: sort.strategies.byProperty
    });

    this.state = {
      sortingColumns: {
        'name.first': {
          direction: 'desc',
          position: 0
        }
      },
      columns: [
        {
          property: 'id',
          header: {
            label: 'ID'
          }
        },
        {
          property: 'name',
          header: {
            label: 'Name',
            transforms: [sortable],
            formatters: [
              sort.header({
                sortable,
                getSortingColumns,
                strategy: sort.strategies.byProperty
              })
            ]
          }
        },
        {
          property: 'tools.hammer',
          header: {
            label: 'Activate',
            transforms: [sortable],
            formatters: [
              sort.header({
                sortable,
                getSortingColumns,
                strategy: sort.strategies.byProperty
              })
            ]
          },
          cell: {
            formatters: [hammer => (hammer ? 'Hammertime' : 'nope')]
          }
        },
        {
          property: 'country',
          header: {
            label: 'Country',
            transforms: [sortable],
            formatters: [
              sort.header({
                sortable,
                getSortingColumns,
                strategy: sort.strategies.byProperty
              })
            ]
          },
          cell: {
            formatters: [country => countries[country]]
          }
        }
      ],
      rows: [
        { id: 100, name: 'John', tools: { hammer: true }, country: 'fi' },
        { id: 101, name: 'Jack', tools: { hammer: false }, country: 'dk' },
        { id: 102, name: 'Jack', tools: { hammer: false }, country: 'dk' },
        { id: 103, name: 'Jack', tools: { hammer: false }, country: 'dk' },
        { id: 104, name: 'Jack', tools: { hammer: false }, country: 'dk' },
        { id: 105, name: 'Jack', tools: { hammer: false }, country: 'dk' }
      ]
    };
  }

  render() {
    const { rows, sortingColumns, columns } = this.state;
    const resolvedColumns = resolve.columnChildren({ columns });
    const sortedRows = compose(
      sort.sorter({
        columns: resolvedColumns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      }),
      resolve.resolve({
        columns: resolvedColumns,
        method: resolve.nested
      })
    )(rows);
    return (
      <Table.Provider
        className="table table-striped table-bordered"
        columns={columns}
      >
        <Table.Header headerRows={resolve.headerRows({ columns })} />
        <Table.Body rows={sortedRows} rowKey="id" />
      </Table.Provider>
    );
  }
}
