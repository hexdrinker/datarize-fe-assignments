# Datarize Frontend 과제 전형

## 설정 및 실행

```cmd
cd apps
cd frontend
yarn
cd ..
yarn start-server
yarn start-client
```

## 사용 패키지

- Routing
  - react-router-dom
- Asynchronous
  - @tanstack/react-query
  - axios
- Styling
  - @emotion/react
  - @emotion/styled
  - react-icons
- Utils
  - date-fns
  - react-day-picker
  - recharts

## 구조

```md
frontend/src
├── components
│ ├── Chart // 차트 컴포넌트
│ ├── CustomerListItem // 고객 목록 아이템
│ ├── CustomerPurchaseListItem // 고객 구매 목록 아이템
│ └── ErrorView // 에러 컴포넌트
├── constants
│ └── routes // 라우팅 관련 상수
├── pages
│ ├── CustomerDetail // 고객 상세 페이지 ( 구매 목록 정보 )
│ ├── CustomerList // 고객 목록 페이지
│ ├── Index // 인덱스 페이지
│ └── PurchaseFrequency // 구매 빈도 페이지
└── queries
│ ├── index
│ ├── useCustomerList // 고객 목록 Query
│ ├── useCustomerPurchases // 고객 구매 목록 Query
│ └── usePurchaseFrequency // 구매 빈도 Query
└── fetcher // axios 추상화
└── types // interface
```

## 구현 사항

- 고객 목록 페이지
  - 고객 ID 기준으로 기본 정렬
  - 고객명 기준 검색 기능 추가
  - 구매 금액 기준 오름차순/내림차순 정렬 추가
  - 고객 Row 클릭 시 고객 상세 페이지로 이동
- 고객 상세 페이지
  - 고객의 상세 구매 내역 렌더링
- 구매 빈도 페이지
  - 시작일, 종료일 범위 내에서 금액 별 구매 빈도 차트 렌더링
- 전체 페이지
  - 비동기 처리 pending 처리
  - 에러 발생 시 에러 화면 노출
