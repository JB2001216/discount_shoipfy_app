import React, {useCallback, useState} from 'react';
import {Card, Tabs} from '@shopify/polaris';
import DiscountCodes from './DiscountCodes/discountcodes.js'

const Index = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'discount-codes',
      content: 'Discount codes',
      accessibilityLabel: 'Discount codes',
      panelID: 'discount-codes-content',
    },
    {
      id: 'automatic-discounts',
      content: 'Automatic discounts',
      panelID: 'automatic-discounts-content',
    }
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {
          selected === 0 ? (
            <DiscountCodes />
          ) : (
            <p>Tab {selected} selected</p>
          )
        }
      </Tabs>
    </Card>
  );
}

export default Index;
