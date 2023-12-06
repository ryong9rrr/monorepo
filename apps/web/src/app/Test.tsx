"use client";

import { sayHello } from "@monorepo/lib";

export default function Test() {
  return <button onClick={sayHello}>의존성테스트 클릭! 콘솔확인</button>;
}
