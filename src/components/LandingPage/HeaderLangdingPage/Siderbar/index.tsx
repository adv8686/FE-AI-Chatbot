import Text from '@components/UI/Text';

const MENUS = [
  {
    key: 1,
    label: 'Why Demy',
    href: '/',
  },
  {
    key: 2,
    label: 'How it Work?',
    href: '/',
  },
  {
    key: 3,
    label: 'Testimonials',
    href: '/',
  },
  {
    key: 4,
    label: 'Pricing',
    href: '/',
  },
  {
    key: 5,
    label: 'FAQ',
    href: '/',
  },
];
const Siderbar = () => {
  return (
    <div className='flex items-center gap-4'>
      {MENUS?.map((item) => {
        return (
          <div key={item?.key} className='py-2 px-3 group'>
            <Text
              type='font-14-600'
              className='cursor-pointer group-hover:text-accent transition-all'
            >
              {item?.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
export default Siderbar;
