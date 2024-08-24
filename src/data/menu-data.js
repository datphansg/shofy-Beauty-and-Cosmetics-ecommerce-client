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
        link: '/',
        mega_menus: [
          { title: 'Thời Trang Nữ', link: '/shop?category=5fe995384ed0328a42a47947' },
          { title: 'Thời Trang Trẻ Em', link: '/shop?category=60b73561a7cea4656f7db50f' },
          { title: 'Túi ví', link: '/shop?category=5fd9b26bbabb26c76c11a2d9' },
          { title: 'Phụ Kiện và Trang Sức', link: '/shop?category=5ff680f99027bfba4f4a0765' },
          { title: 'Đồng Hồ', link: '/shop?category=62abede5f0edc750696396ce' },
        ]
      },
      {
        title: 'Sắc Đẹp và Sức Khỏe',
        link: '/',
        mega_menus: [
          { title: 'Sắc Đẹp', link: '/shop?category=5fd9b614babb26c76c11a2dd' },
          { title: 'Sức Khỏe', link: '/shop?category=60fe732795b348b1b56f45cb' },
        ]
      },
      {
        title: 'Nhà Cửa và Đời Sống',
        link: '/',
        mega_menus: [
          { title: 'Nhà Cửa và Đời Sống', link: '/shop?category=5fd82914babb26c76c11a0f9' },
          { title: 'Chăm Sóc Nhà Cửa', link: '/shop?category=' },
          { title: 'Chăm Sóc Thú Cưng', link: '/shop?category=' },
          { title: 'Thể Thao và Du Lịch', link: '/shop?category=' },
          { title: 'Ô Tô Xe Máy và Xe Điện', link: '/shop?category=' },
        ]
      },
      {
        title: 'Gia Đình và Trẻ Em',
        link: '/',
        mega_menus: [
          { title: 'Mẹ và Bé', link: '/shop?category=' },
          { title: 'Đồ Chơi', link: '/shop?category=' },
          { title: 'Văn Phòng Phẩm Online', link: '/shop?category=' },
          { title: 'Sách', link: '/shop?category=' },
          { title: 'Thiết Bị Điện Gia Dụng', link: '/shop?category=' },
          { title: 'Voucher và Dịch vụ', link: '/shop?category=' },
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
  {
    id: 3,
    sub_menu: true,
    title: 'Shop',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Right Sidebar', link: '/shop-right-sidebar' },
      { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },     
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