import bannerImage from '@assets/file_00000000403461f58001360c16d5af01_1759100043431.png';

export default function Header() {
  return (
    <header className="relative mb-8">
      {/* Banner Image */}
      <div className="relative h-32 md:h-48 overflow-hidden rounded-lg">
        <img
          src={bannerImage}
          alt="Gaming Banner - Call of Duty, Free Fire, PUBG"
          className="w-full h-full object-cover"
          data-testid="banner-image"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content over banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white" data-testid="text-main-title">
            SIMO STORE
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-1 max-w-2xl" data-testid="text-subtitle">
            Best & cheapest game keys for Android, iOS & PC!
          </p>
          <p className="text-xs md:text-base text-gray-300 max-w-xl" data-testid="text-description">
            Fast iOS signing certificates available
          </p>
        </div>
      </div>
    </header>
  );
}