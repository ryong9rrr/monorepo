'use client';

import { sayHello } from '@core/lib';
import { Button } from '@core/ui';

export default function Test() {
  return <Button text="ui에서 가져온 버튼이에요" onClick={sayHello} />;
}