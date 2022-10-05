import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="images/logo_horizpntal_136x18.png" />
        <Search src="images/ic_nav_store_search.png" />
      </LogoContainer>
      <CategoryTitle>취향대로 골라보기</CategoryTitle>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const LogoContainer = styled.div`
  margin: 31px 15px 0px 16px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 136px;
  height: 18px;
`;

const Search = styled.img`
  width: 18px;
  height: 18px;
`;

const CategoryTitle = styled.div`
  width: 122px;
  height: 24px;
  margin: 21px 0px 16px 16px;
`;