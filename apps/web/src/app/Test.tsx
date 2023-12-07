'use client';

import { Button } from '@core/ui';
import { sayHello } from '@core/lib';

export default function Test() {
  return <Button onClick={sayHello} text="클릭해봐" />;
}
