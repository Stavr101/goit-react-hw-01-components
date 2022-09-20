import PropTypes from 'prop-types';

import { TransactionBody } from './TransactionBody';
import { RowTransaction } from './TransactionBody.styled';
import {
  Transactionstable,
  TransactionstableBody,
  TransactionstableHead,
  TransactionstableHeadData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactionstable>
      <TransactionstableHead>
        <RowTransaction>
          <TransactionstableHeadData>Type</TransactionstableHeadData>
          <TransactionstableHeadData>Amount</TransactionstableHeadData>
          <TransactionstableHeadData>Currency</TransactionstableHeadData>
        </RowTransaction>
      </TransactionstableHead>
      <TransactionstableBody>
        {items.map(item => (
          <TransactionBody
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TransactionstableBody>
    </Transactionstable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
