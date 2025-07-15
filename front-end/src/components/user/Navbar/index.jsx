import * as S from './styles';

const Navbar = () => {
  return (
    <S.MainNav>
      <nav>
        <S.MainList>
          <li>
            <S.ItemLink to="">
              <i class="icon-home fas fa-home"></i>
            </S.ItemLink>
          </li>
          <li>
            <S.ItemLink to="">
              HOT
            </S.ItemLink>
          </li>
          <li>
            <S.ItemLink to="">
              THEO DÕI
            </S.ItemLink>
          </li>
          <li>
            <S.ItemLink to="">
              LỊCH SỬ
            </S.ItemLink>
          </li>
          
          <li>
            <S.ItemLink to="">
              TÌM TRUYỆN
            </S.ItemLink>
          </li>
        </S.MainList>
      </nav>
    </S.MainNav>
  );
};

export default Navbar;
