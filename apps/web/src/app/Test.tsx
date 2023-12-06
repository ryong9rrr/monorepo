"use client";

import { Button } from "@monorepo/ui";
import { sayHello } from "@monorepo/lib";

export default function Test() {
  return <Button onClick={sayHello} text="클릭해봐" />;
}
