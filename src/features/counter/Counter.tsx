import React, { useEffect } from 'react';
import { Table, Loader } from 'semantic-ui-react'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import {
  clearData,
  incrementAsync,
  selectData,
  selectStatus,
} from './counterSlice';

export function Counter() {
  const data = useAppSelector(selectData);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    status === 'idle' && dispatch(incrementAsync());

    return () => {dispatch(clearData())}
  }, [])


  return (
    status !== 'success' ? (<Loader />) : (
      <div className={styles.tableWrapper}>
        <div className={styles.tableWrapperItem}>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>$</Table.HeaderCell>
            <Table.HeaderCell>€</Table.HeaderCell>
            <Table.HeaderCell>£</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>{data?.bpi.USD.rate_float}</Table.Cell>
            <Table.Cell>{data?.bpi.EUR.rate_float}</Table.Cell>
            <Table.Cell>{data?.bpi.GBP.rate_float}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
        </div>
      </div>
    )
  );
}
