import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Trang chủ',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    products: true,
    title: 'Sản phẩm',
    link: '/shop',
    product_pages: [
      {
        title: 'Thời Trang và Phụ Kiện',
        link: '/category',
        mega_menus: [
          { title: 'Thời Trang Nữ', link: '/category/thoi-trang-nu/5fe995384ed0328a42a47947' },
          { title: 'Thời Trang Trẻ Em', link: '/category/thoi-trang-tre-em/60b73561a7cea4656f7db50f' },
          { title: 'Túi ví', link: '/category/tui-vi/5fd9b26bbabb26c76c11a2d9' },
          { title: 'Phụ Kiện và Trang Sức', link: '/category/phu-kien-va-trang-suc/5ff680f99027bfba4f4a0765' },
          { title: 'Đồng Hồ', link: '/category/dong-ho/62abede5f0edc750696396ce' },
        ]
      },
      {
        title: 'Sắc Đẹp và Sức Khỏe',
        link: '/category',
        mega_menus: [
          { title: 'Sắc Đẹp', link: '/category/sac-dep/5fd9b614babb26c76c11a2dd' },
          { title: 'Sức Khỏe', link: '/category/suc-khoe/60fe732795b348b1b56f45cb' },
        ]
      },
      {
        title: 'Nhà Cửa và Đời Sống',
        link: '/category',
        mega_menus: [
          { title: 'Nhà Cửa và Đời Sống', link: '/category/nha-cua-va-doi-song/5fd82914babb26c76c11a0f9' },
          { title: 'Chăm Sóc Nhà Cửa', link: '/category/cham-soc-nha-cua/62abed9ff0edc750696395bc' },
          { title: 'Chăm Sóc Thú Cưng', link: '/category/cham-soc-thu-cung/60ac9eb9b7817a0cfa55be7a' },
          { title: 'Thể Thao và Du Lịch', link: '/category/the-thao-va-du-lich/6246b0d3175d71c1822c127b' },
          { title: 'Ô Tô Xe Máy và Xe Điện', link: '/category/o-to-xe-may-va-xe-dien/60912867ca803f755722bdfa' },
        ]
      },
      {
        title: 'Gia Đình và Trẻ Em',
        link: '/category',
        mega_menus: [
          { title: 'Mẹ và Bé', link: '/category/me-va-be/5fd9b4cdbabb26c76c11a2db' },
          { title: 'Đồ Chơi', link: '/category/do-choi/5fd9b86bbabb26c76c11a2e1' },
          { title: 'Văn Phòng Phẩm Online', link: '/category/van-phong-pham-online/62abf1739788e8c74c2b2816' },
          { title: 'Sách', link: '/category/sach/5fd9b576babb26c76c11a2dc' },
          { title: 'Thiết Bị Điện Gia Dụng', link: '/category/thiet-bi-dien-gia-dung/5fd9b691babb26c76c11a2de' },
          { title: 'Voucher và Dịch vụ', link: '/category/voucher-va-dich-vu/60bd8b4bd31d9f059f8a496a' },
        ]
      }
      // {
      //   title: 'Shop Page',
      //   link: '/shop',
      //   mega_menus: [
      //     { title: 'Only Categories', link: '/shop-category' },
      //     { title: 'Shop Grid with Sideber', link: '/shop' },
      //     { title: 'Product Details', link: '/product-details' },
      //   ]
      // },
      // {
      //   title: 'Products',
      //   link: '/product-details',
      //   mega_menus: [
      //     { title: 'Product Simple', link: '/product-details' },
      //     { title: 'With Video', link: '/product-details-video' },
      //     { title: 'With Countdown Timer', link: '/product-details-countdown' },
      //     { title: 'Variations Swatches', link: '/product-details-swatches' },
      //   ]
      // },
      // {
      //   title: 'eCommerce',
      //   link: '/shop',
      //   mega_menus: [
      //     { title: 'Shopping Cart', link: '/cart' },
      //     { title: 'Compare', link: '/compare' },
      //     { title: 'Wishlist', link: '/wishlist' },
      //     { title: 'Checkout', link: '/checkout' },
      //     { title: 'My account', link: '/profile' },
      //   ]
      // },
      // {
      //   title: 'More Pages',
      //   link: '/shop',
      //   mega_menus: [
      //     { title: 'Login', link: '/login' },
      //     { title: 'Register', link: '/register' },
      //     { title: 'Forgot Password', link: '/forgot' },
      //     { title: '404 Error', link: '/404' },
      //   ]
      // },
    ]
  },
  // {
  //   id: 3,
  //   sub_menu: true,
  //   title: 'Shop',
  //   link: '/shop',
  //   sub_menus: [
  //     { title: 'Shop', link: '/shop' },
  //     { title: 'Right Sidebar', link: '/shop-right-sidebar' },
  //     { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },     
  //   ],
  // },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: 'Coupons',
  //   link: '/coupon',
  // },
  // {
  //   id: 5,
  //   sub_menu: true,
  //   title: 'Blog',
  //   link: '/blog',
  //   sub_menus: [
  //     { title: 'Blog Standard', link: '/blog' },
  //     { title: 'Blog Grid', link: '/blog-grid' },
  //     { title: 'Blog List', link: '/blog-list' },
  //     { title: 'Blog Details', link: '/blog-details' },
  //     { title: 'Blog Details Full Width', link: '/blog-details-2' },
  //   ]
  // },
  // {
  //   id: 6,
  //   single_link: true,
  //   title: 'Contact',
  //   link: '/contact',
  // },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        img: home_1,
        title: 'Electronics',
        link: '/'
      },
      {
        img: home_2,
        title: 'Fashion',
        link: '/home-2'
      },
      {
        img: home_3,
        title: 'Beauty',
        link: '/home-3'
      },
      {
        img: home_4,
        title: 'Jewelry',
        link: '/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
      { title: 'Danh mục sản phẩm', link: '/shop-category' },
      { title: 'Product Simple', link: '/product-details' },
      { title: 'With Video', link: '/product-details-video' },
      { title: 'With Countdown Timer', link: '/product-details-countdown' },
      { title: 'Variations Swatches', link: '/product-details-swatches' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'eCommerce',
    link: '/cart',
    sub_menus: [
      { title: 'Shopping Cart', link: '/cart' },
      { title: 'Compare', link: '/compare' },
      { title: 'Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'My account', link: '/profile' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: '404 Error', link: '/404' },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog List', link: '/blog-list' },
      { title: 'Blog Details', link: '/blog-details' },
      { title: 'Blog Details Full Width', link: '/blog-details-2' },
    ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]