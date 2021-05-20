import React from 'react'
import { Table, Loader } from 'semantic-ui-react'
import {useAsync} from 'react-use';
import { getBitcoin } from '../api/getBitcoin';
import styles from './styles.module.css';


export const Hook = () => {
    const state = useAsync(getBitcoin, []);

    return state.loading ? (<Loader />) : (
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
              <Table.Cell>{state.value?.bpi.USD.rate_float}</Table.Cell>
              <Table.Cell>{state.value?.bpi.EUR.rate_float}</Table.Cell>
              <Table.Cell>{state.value?.bpi.GBP.rate_float}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </div>
        </div>
      )
}