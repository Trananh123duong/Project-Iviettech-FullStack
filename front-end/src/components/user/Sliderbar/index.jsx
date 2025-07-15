import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as S from './styles';

const Sliderbar = () => {
  const comics = [
    { title: "Bắt Đầu Từ Cửu Đầu Điểu", chapter: 317, time: "3 ngày trước", image: "link1.jpg" },
    { title: "Ngạo Thị Thiên Địa", chapter: 863, time: "26 ngày trước", image: "link2.jpg" },
    { title: "Thiết Huyết Kiếm Sĩ", chapter: 121.1, time: "22 giờ trước", image: "link3.jpg" },
    { title: "Anh Hùng Giai Cấp", chapter: 120, time: "1 tháng trước", image: "link4.jpg" },
    { title: "Ta Có Một Sơn Trại1", chapter: 1174, time: "3 ngày trước", image: "link5.jpg" },
    { title: "Ta Có Một Sơn Trại2", chapter: 1174, time: "3 ngày trước", image: "link5.jpg" },
    { title: "Ta Có Một Sơn Trại3", chapter: 1174, time: "3 ngày trước", image: "link5.jpg" },
    // thêm nữa nếu muốn
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <Slider {...settings}>
      {comics.map((comic, index) => (
        <S.ComicCard key={index}>
          <img src={comic.image} alt={comic.title} />
          <div className="title">{comic.title}</div>
          <div className="chapter-time">Chapter {comic.chapter} – {comic.time}</div>
        </S.ComicCard>
      ))}
    </Slider>
  );
}

export default Sliderbar
