function HeaderItems({ Icon, title }) {
  return (
    <div className="group flex  w-14 sm:w-20 hover:text-white flex-col items-center cursor-pointer " >
      <Icon className="h-8 mb-1  group-hover:animate-bounce" />
      <p className="opacity-0  transition duration-200  transform group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItems;
