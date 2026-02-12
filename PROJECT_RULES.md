# PROJECT_RULES.md

## 📌 프로젝트 개요
- **제품명**: 영수증은 사양합니다
- **핵심 가치**: 결제 시 비대면/비음성 의사소통 지원 (말하지 않고 화면으로 전달)
- **디자인 철학**: 미니멀리즘, 고대비, 1초 이내 실행

## 🛠️ 기술 스택
- **Framework**: React (Vite)
- **State Management**: React Hooks (Simple & Fast)
- **Local Storage**: localStorage
- **Style**: Tailwind CSS + Shadcn.ui-inspired (Minimalist, Clean, High Contrast)

## 📋 [버전 관리 규칙]
- 모든 커밋 메시지는 **'Conventional Commits'** 형식을 준수한다.
- 형식: `<type>(<scope>): <subject>`
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
  - `refactor`: 코드 리팩토링
  - `test`: 테스트 코드 추가
  - `chore`: 빌드 업무 수정, 패키지 매니저 수정 등

## 🎨 UI/UX 규칙
- **Color**: 배경은 부드러운 다크모드 또는 파스텔톤, 텍스트는 가독성 극대화 (고대비).
- **Typography**: 산세리프 계열 (예: Pretendard, Inter).
- **Simplicity**: PRD 외의 기능(로그인, 설정, 광고 등)은 절대 추가하지 않는다.
- **Speed**: 애니메이션은 최소화하고 즉각적인 반응을 우선한다.

## 🚀 실행 방법
1. **개발 서버 실행 (권장)**: 터미널에서 `npm run dev` 명령어를 실행한 후, 출력되는 로컬 호스트 주소(예: `http://localhost:5173`)로 접속합니다.
2. **단독 실행 (간편)**: 프로젝트 루트에 있는 `standalone.html` 파일을 브라우저로 직접 엽니다. (서버 없이 즉시 작동)

## ⚠️ 트러블슈팅 및 주의사항
- **CORS 에러 (index.html 직접 실행 시)**: Vite와 같은 현대적인 웹 프레임워크는 보안상의 이유로 `file://` 프로토콜(탐색기에서 바로 열기)에서 자바스크립트 모듈 실행을 차단합니다. 
  - **이것은 빌드가 잘못된 것이 아닙니다.** 
  - Vercel이나 일반 웹 서버에 올리면 `http://` 프로토콜을 사용하게 되어 완벽하게 작동합니다.
  - 로컬에서 테스트하려면 반드시 `npm run preview` 또는 `npm run dev`를 사용하세요.
  - 서버 없이 파일만 바로 열고 싶다면 [standalone.html](file:///c:/Users/HDBIO/Desktop/보물창고/app_바이브코딩/영수증은 사양합니다/standalone.html)을 사용하세요.
- **Offline-First**: 네트워크 통신이 발생하지 않도록 한다.
- **State Persistence**: 마지막 선택 모드가 유지되지 않으면 제품 가치가 훼손된다.
- **Font Size**: 계산대 직원이 멀리서도 볼 수 있도록 충분히 크게 설정한다.
