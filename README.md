# my-monorepo

- 만약 이 repository를 clone 한다면...

  `yarn dlx @yarnpkg/sdks vscode` 를 실행시켜주세요.

## 💥 트러블 슈팅

### 타입스크립트 세팅 관련

- typescript를 최신 버전으로 설치하면 yarn berry pnp와 충돌이 나서 import 에러가 발생합니다.

  조금 아래 버전인 `yarn add -D typescript@5.0.4` 로 설치하면 에러가 발생하지 않습니다.
