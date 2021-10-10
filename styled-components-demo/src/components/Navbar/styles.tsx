// (오류) cannot be compiled under '--isolatedModules' 뜬다면,
// 빈페이지에 export {} 입력 하면 에러 해결된다고 한다.
// 하지만 나는 빈페이지가 없었기 때문에 포트 지우고 재실행했다.
// 출처 : https://proglish.tistory.com/141?category=951976

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  color: darkgray;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const Logo = styled.div`
  margin-left: 30px;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

/* px, em, rem 비교
px은 기본값 (absolute length), 고정되어 있기 때문에 반응형 웹 작업에 효율적이지 않다.
%은 사용자가 보이는 화면에서 차지하는 비중을 나타낸다. (wh, wv)

em, rem은 글자 크기를 참조한다.
em은 자신에게 크기가 없으면 부모의 것을 참조한다 (갈수록 위로 올라간다)
rem은 오직 html 태그의 글자 크기만 참조한다.

html 기본 글자크기는 16px인데 아래와 같이 설정해주면 10px이 되어 참조할 때 편하다.
16px * 62.5% === 10px === 1rem

html {
  font-size: 62.5%;
}

* 참고자료
* [WATCHA 개발 지식 — px | em | rem] (https://medium.com/watcha/watcha-%EA%B0%9C%EB%B0%9C-%EC%A7%80%EC%8B%9D-px-em-rem-f569c6e76e66)
*/
