import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";
function Header() {
  return (
    <header className="flex items-center flex-col sm:flex-row  justify-between m-5">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItems Icon={HomeIcon} title="HOME" />
        <HeaderItems Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItems Icon={BadgeCheckIcon} title="VERIFIED" />

        <HeaderItems Icon={CollectionIcon} title="COLLECTIONS" />
        <HeaderItems Icon={SearchIcon} title="SEARCH" />
        <HeaderItems Icon={UserIcon} title="ACCOUNT" />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
