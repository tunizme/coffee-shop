import React from "react";
import { Link } from "react-router-dom";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-full flex items-center bg-[#262626]">
      <div className="lg:w-9/12 w-11/12 m-auto text-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-8 pb-4 border-b-[1px] border-white">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-2 flex-col">
              <h1 className="font-medium text-lg mb-2">Giới thiệu</h1>
              <span className="flex flex-col font-medium text-[13px] gap-2">
                <Link href="">Về chúng tôi</Link>
                <Link href="">Sản phẩm</Link>
                <Link href="">Khuyến mãi</Link>
                <Link href="">Chuyện cà phê</Link>
                <Link href="">Cửa hàng</Link>
                <Link href="">Tuyển dụng</Link>
              </span>
            </div>
            <div className="flex gap-2 flex-col">
              <h1 className="font-medium text-lg mb-2">Điều khoản</h1>
              <span className="flex flex-col font-medium text-[13px] gap-2">
                <Link href="">Điều khoản sử dụng</Link>
                <Link href="">Chính sách bảo mật thông tin</Link>
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <h1 className="font-medium text-lg mb-2 flex items-center gap-2">
              <HiOutlinePhone size={20} /> Đặt hàng: 0969721480
            </h1>
            <h1 className="font-medium text-lg mb-2 flex items-center gap-2">
              <HiOutlineLocationMarker size={20} /> Liên hệ
            </h1>
            <p className="font-medium text-[13px]">
              {" "}
              Tây Thành, Quảng Thành, Quảng Điền, T.T.Huế
            </p>
          </div>
          <div>
            <iframe
              title="page"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="260"
              height="70"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <div className="flex mt-3 gap-2">
              <a href="https://www.facebook.com" target="__blank">
                <AiOutlineFacebook size={20} color="white" />
              </a>
              <a href="https://www.instagram.com" target="__blank">
                <AiOutlineInstagram size={20} color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-cols-2 pt-4 pb-12">
          <div>
            <p className="font-normal text-xs">
              Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN <br /> Mã số DN:
              000000000 do sở kế hoạch và đầu tư tp. Hue cấp ngày 27/02/2023.
              Người đại diện: Tran Anh Vu <br /> Địa chỉ: thôn Tây Thành, xã
              Quảng Thành, huyện Quảng Điền, tỉnh Thừa Thiên Huế Điện thoại:
              (+84) 0969721480 Email: trnanhvu.dev@gmail.com <br /> © 2023-2030
              Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
