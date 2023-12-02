function NavDropDown({ content }) {
    return (
        <div className='group md:relative block'>
            <div className='flex gap-2 items-center'>
                <a href='#' className='group-hover:font-bold'>
                    {content.title}
                </a>
                <img
                    src='/icon-arrow-down.svg'
                    alt=''
                    className='group-hover:rotate-180 transition'
                />
            </div>
            <div className='nav-links cursor-pointer md:opacity-0 md:group-hover:opacity-100 transition -translate-y-5 md:group-hover:translate-y-0  md:shadow-2xl   w-max md:absolute right-0 bg-white p-4 rounded-lg md:mt-0 mt-6 ml-4 group-hover:block hidden space-y-2'>
                {content.content.map((item, index) => {
                    return (
                        <div className='flex items-center gap-4' key={index}>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={`Icon for ${item.text}`}
                                />
                            )}
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NavDropDown;
