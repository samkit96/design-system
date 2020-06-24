import * as React from 'react';
import { Card } from '@/index';
import Table from '../Table';
import schema from '../../grid/__stories__/_common_/schema';
import data from '../../grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '../../grid/__stories__/_common_/loaderSchema';
import { fetchData } from '../../grid/__stories__/_common_/fetchData';
import { action } from '@storybook/addon-actions';

export const all = () => {
  const async = boolean(
    'async',
    false
  );

  const type = select(
    'type',
    ['resource', 'data'],
    'resource'
  );

  const size = select(
    'size',
    ['comfortable', 'standard', 'compressed', 'tight'],
    'comfortable'
  );

  const draggable = boolean(
    'draggable',
    true
  );

  const withHeader = boolean(
    'withHeader',
    true
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const showMenu = boolean(
    'showMenu',
    true
  );

  const withPagination = boolean(
    'withPagination',
    true
  );

  const paginationType = select(
    'paginationType',
    ['basic', 'jump'],
    'jump'
  );

  const pageSize = number(
    'pageSize',
    12
  );

  const saveSortHistory = boolean(
    'saveSortHistory',
    false
  );

  let dataAttr = {};
  if (async) {
    dataAttr = {
      fetchData,
    };
  } else {
    dataAttr = {
      schema,
      data,
    };
  }

  return (
    <Card
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Table
        {...dataAttr}
        withHeader={withHeader}
        headerProps={{
          withSearch: true,
        }}
        withCheckbox={withCheckbox}
        showMenu={showMenu}
        type={type}
        size={size}
        draggable={draggable}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={pageSize}
        loaderSchema={loaderSchema}
        onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
        onSelect={(rowIndex, selected, selectedList) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)}`)()}
        onPageChange={newPage => action(`on-page-change:- ${newPage}`)()}
        saveSortHistory={saveSortHistory}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table',
  component: Table
};
