import PropTypes from 'prop-types';

import { DataTransactions, RowTransaction } from './TransactionBody.styled';

export const TransactionBody = ({ id, type, amount, currency }) => {
  return (
    <RowTransaction key={id}>
      <DataTransactions>{type}</DataTransactions>
      <DataTransactions>{amount}</DataTransactions>
      <DataTransactions>{currency}</DataTransactions>
    </RowTransaction>
  );
};

TransactionBody.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
