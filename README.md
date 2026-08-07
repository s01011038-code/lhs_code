# Hyunseok Lee Portfolio

GitHub Pages에 바로 올릴 수 있는 정적 포트폴리오입니다.

## 파일 구조

```text
hyunseok_portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── 여기에 CV / 프로필 사진을 넣으세요.
```

## 먼저 수정할 부분

`index.html`을 열어서 아래 항목을 검색해 본인 정보로 바꾸세요.

- `[University Name]`
- `20XX`
- `YOUR_EMAIL@example.com`
- `s01011038-code`
- `YOUR_LINKEDIN_ID`
- 프로젝트의 `Report ↗`, `Code ↗` 링크에 있는 `href="#"`

## 프로필 사진 추가

1. `assets/profile.jpg` 파일을 넣습니다.
2. `index.html`의 About 섹션에서 아래 코드:

```html
<div class="avatar" aria-hidden="true">HL</div>
```

를 삭제하고, 바로 위 주석에 적힌 `<img>` 코드를 활성화합니다.

## CV 추가

CV 파일명을 다음처럼 맞추면 현재 링크를 그대로 쓸 수 있습니다.

```text
assets/Hyunseok_Lee_CV.pdf
```

## GitHub Pages 배포

가장 깔끔한 방법은 GitHub repository 이름을 다음처럼 만드는 것입니다.

```text
s01011038-code.github.io
```

그 다음 이 폴더의 파일을 repository 최상위(root)에 업로드하세요.

GitHub에서:

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source: Deploy from a branch`
5. `Branch: main / root`
6. Save

잠시 후:

```text
https://s01011038-code.github.io/
```

에서 사이트가 열립니다.

## 로컬에서 확인

`index.html`을 브라우저로 직접 열어도 됩니다.

VS Code를 사용한다면 Live Server 확장을 이용하면 수정 결과를 바로 확인하기 편합니다.
