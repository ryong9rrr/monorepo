'use client';

import { Say } from '@core/lib';
import { Button } from '@core/ui';

export default function Test() {
  const handleClick = () => {
    window.alert(Say.say('hello'));
  };

  return <Button onClick={handleClick}>ui에서 가져온 버튼이에요</Button>;
}
