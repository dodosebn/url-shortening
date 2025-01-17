import React from 'react'
import { firstItem, secondItem,  thirdItem, fourthItem, FooterItem,  LogoForFooter  } from "./customs";
const Foot: React.FC = () => {
  return (
    <footer className='bg-footbg flex flex-col lg:flex-row justify-center text-center gap-6 py-[3rem]'>
      <LogoForFooter />
      <div>
        {
            firstItem.map(item => (
                <FooterItem itemId={item.id} itemName={item.name} title='Features'  />
            ))
        }
      </div>
      <div>
        {secondItem.map(item => (
          <FooterItem itemId={item.id} itemName={item.name} title='Resources'  />
        ))}
      </div>
      <div>
        {thirdItem.map(item => (
                    <FooterItem itemId={item.id} itemName={item.name} title='Company'  />

        ))}
      </div>
      <div className='mx-auto flex gap-6 pb-6 lg:pt-4'>
        {
            fourthItem.map(item => (
                <ul key={item.id}>
<li className='w-6 h-6 fill-current text-white hover:text-cyan text-xl'>{item.imgSrc}</li>
                </ul>
            ))
        }
      </div>
    </footer>
  )
}

export default Foot;
