import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from '@store'
import { CartIcon } from '../../assets'

const CartBlock = ({ OpenCart, setNavPopupState, _Cart }) => (
  <span
    className='flex relative items-center h-full cursor-pointer'
    onClick={() => {
      setNavPopupState('cart')
    }}
  >
    <div className='w-6 h-6 Anim AnimScale'>
      <CartIcon />
      {_Cart !== 0 && _Cart && (
        <span className='NotiBadge-primary'>{_Cart}</span>
      )}
    </div>
    <AnimatePresence>{OpenCart && <Cart key='NAV_Cart' />}</AnimatePresence>
  </span>
)

const Cart = () => {
  const _CartItems = User((state) => state.cartItems)

  const Amount = typeof _CartItems === 'boolean' ? 0 : _CartItems.length

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='flex absolute top-14 flex-col py-4 w-48 max-h-64 drop-shadow-md  md:right-0 Card-back-md-60 '
    >
      <h5 className='mb-2 text-base font-semibold text-center'>Cart</h5>
      {Amount === 0 || !_CartItems ? (
        <div className='flex justify-center items-center h-24'>
          <p className='text-xs font-light text-center opacity-60'>
            shop will coming soon <br /> in next version
          </p>
        </div>
      ) : (
        <>
          <CartItems list={_CartItems} />
          <p className='pt-2 text-xs font-light text-center cursor-pointer Anim AnimOpacity-60'>
            open cart
          </p>
        </>
      )}
    </motion.div>
  )
}

const CartItems = ({ list }) => (
  <div className='overflow-scroll h-full'>
    {list.map((v, i) => (
      <Link href={v.link} passHref key={i}>
        <div className='p-2 mt-1 w-full bg-black/20 border-2 border-transparent border-l-primary-0 cursor-pointer Anim AnimOpacity-80'>
          <h6 className='text-xs'>{v.title}</h6>
          <p className='mt-1 text-xs font-light opacity-80'>{v.description}</p>
          <p className='mt-1 -mb-1 text-2xs font-light text-right opacity-80'>
            {v.time}
          </p>
        </div>
      </Link>
    ))}
  </div>
)

export default CartBlock
