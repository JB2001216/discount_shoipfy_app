import React, {useCallback, useState} from 'react';
import {Card, Tabs} from '@shopify/polaris';
import AllDiscount from './alldiscount.js';

const DiscountCodes = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all',
      content: 'All',
      accessibilityLabel: 'All',
      panelID: 'all-content',
    },
    {
      id: 'active',
      content: 'Active',
      panelID: 'active-content',
    },
    {
      id: 'scheduled',
      content: 'Scheduled',
      panelID: 'scheduled-content',
    },
    {
      id: 'expired',
      content: 'Expired',
      panelID: 'expired-content',
    }
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {
            selected === 0 ? (
                <AllDiscount />
            ) : (
                <p>Tab {selected} selected</p>
            )
        }
      </Tabs>
    </Card>
  );
}

export default DiscountCodes;
