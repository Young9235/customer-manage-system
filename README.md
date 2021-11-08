# 고객 관리 시스템 개발 앱(React)

## nodejs 설치
- https://nodejs.org/ko/ 최신버전 다운로드

## reactjs 문서 참조
- https://ko.reactjs.org/
- https://create-react-app.dev/

### my-app이라는 폴더 안에 리액트 프로젝트 생성 -> 프로젝트 시작
```
npx create-react-app my-app 
cd my-app
npm start
```

## git 명령어
```
git remote add origin https://github.com/Young9235/customer-manage-system.git
git branch -M main

git push -u origin main
```

## react에서 많이 쓰이는 UI
### Material UI (웹 디자인 프레임워크)
- document : https://mui.com/getting-started/usage/
- material 버전 확인(현재 소스코드는 v5로 사용)
```
v4 npm install @material-ui/core 
v5 npm install @mui/material @emotion/react @emotion/styled
```

## npm 설치 패키지 보기
- 현재 설치된 패키지
$ npm list --depth=0
- 글로벌로 설치된 패키지
$ npm list --depth=0 -g

## yarn 설치
- npm 명령어 보다 가벼움
```
npm install --global yarn
yarn --version
```

## Express 서버 모듈 추가
### 설치

- yarn 명령어
```
yarn add express
- 개발시 변경사항을 실시간으로 업데이트 해주기 위함이며 --dev는 개발환경에서만 적용하기 위한 모듈
yarn add nodemon --dev  
- 리액트서버와 노드서버를 동시에 실행 시키기위한 모듈
yarn add concurrently  
- package.json 파일 설정후, 실행
yarn start
- yarn 설정 확인
yarn config list  
```

- npm 명령어
```
$ npm install nodemon body-parser express  
- 서버와 클라이언트 동시에 실행 시키기
$ npm install concurrently --save
```

- yarn 사용하지 않고 실행하기
"start" : "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
$ npm run start
