import Image from 'next/image';
import heart from '@icons/heart.svg';
import heartFill from '@icons/heart-fill.svg';
import { TProduct } from '@/features/product/type/product';
import clsx from 'clsx';
interface NFTCardProps {
  product: TProduct;
}

const colorMap = {
  Legendary: 'linear-gradient(to right, #FE955A, #F1DA63)',
  Mythic: 'linear-gradient(to right, #FE5A5A, #F163D2)',
  Epic: 'linear-gradient(to right, #DD5AFE, #6366F1)',
  Rare: 'linear-gradient(to right, #43A6F6, #5868F3)',
  Common: 'linear-gradient(to right, #49DD81, #22B4C6)',
}

const avatars = [
  '/assets/images/characters/assassin.png',
  '/assets/images/characters/basketball-girl.png',
  '/assets/images/characters/mafia-england.png',
  '/assets/images/characters/neon-guy.png',
  '/assets/images/characters/the-dj.png',
]

const NFTCard = ({
  product
}: NFTCardProps) => {
  const avatarIndex = (product.imageId - 1) % avatars.length;
  const avatarSrc = avatars[avatarIndex >= 0 ? avatarIndex : 0];
  const authorName = `${product.author.firstName}_${product.author.lastName}`;
  return (
    <figure className="w-full  p-4 aspect-[267/365]  flex flex-col justify-between bg-[#2A2A2D] rounded-[10px] overflow-hidden" >
      {/* Main Image Container */}
      <div className="relative aspect-square w-full bg-white rounded flex flex-col justify-between" style={{ background: colorMap[product.tier] }}>
        {/* Legendary Badge */}
        <div className="pt-4 px-4 z-10 flex justify-between w-full items-center">
          <div className="px-4 flex items-center justify-center bg-[#3a384199] rounded h-7">
            <span className="text-white font-medium text-xs">{product.tier}</span>
          </div>
          <Image role='button' className='cursor-pointer' onClick={() => { }} src={product.isFavorite ? heartFill : heart} alt="select favorite" width={24} height={24} />
        </div>

        {/* NFT Image */}
        <div className="relative w-full flex-1">
          <Image
            src={avatarSrc}
            alt={`${product.title} - ${product.tier} Tier Digital Asset`}
            fill={true}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
        </div>
      </div>

      <figcaption>
        {/* Card Content */}
        <div className="w-full flex justify-between items-center">
          <h3 className="text-white font-semibold">{product.title}</h3>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/icons/eth.svg"
              alt="Ethereum Currency Symbol"
              width={12}
              height={20}
              aria-hidden="true"
            />
            <span className="text-white">{product.price}</span>
          </div>
        </div>

        {/* Creator Info */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src={product.author.avatar}
              alt={`${authorName}'s profile picture`}
              width={32}
              height={32}
              className="rounded-full"
              quality={85}
            />
            <div className={clsx("absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full border-2 border-[#2A2A2D]",
              product.author.onlineStatus === 'online' && 'bg-[#31B1F7]',
              product.author.onlineStatus === 'offline' && 'bg-[#808080]',
              product.author.onlineStatus === 'busy' && 'bg-[#FF0000]',
              product.author.onlineStatus === 'idle' && 'bg-[#FFFF00]',
            )} >
              <Image
                src={`/assets/icons/status/${product.author.onlineStatus}.svg`}
                alt={`${authorName} is ${product.author.onlineStatus}`}
                width={16}
                height={16}
                aria-hidden="true"
              />
            </div>
          </div>
          <span className="text-white text-xs">{authorName}</span>
        </div>
      </figcaption>
    </figure>
  );
};

export default NFTCard;
