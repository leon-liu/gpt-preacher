import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='mt-12'>
            {/* <div className='h-60 flex flex-col items-center bg-blue-900 px-20'>
                <h3>Ready to start building?</h3>
                <p>At Apideck we&#39;re building the world&#39;s biggest API network. Discover and integrate over 12,000 APIs.</p>
                <a href='https://apitracker.io/' target='_blank' rel='noreferrer'>Check out the API Tracker</a>
            </div> */}
            <div className='px-4 md:px-20 h-16 flex justify-between items-center bg-gray-800 text-gray-300 font-thin text-xs'>
                <ul className='flex'>
                    <li>
                        <a data-testid='footer-item' href='https://beta.openai.com/'>The GPT-{process.env.NEXT_PUBLIC_GPT_VERSION} and ChatGPT name and logo are the property of OpenAI</a>
                    </li>
                    {/* <li>
                        <a href='https://www.apideck.com/products/ecosystem' target='_blank' rel='noopener noreferrer'>Powered by Apideck</a>
                    </li> */}
                </ul>
                <Link href='/'>Privacy Policy</Link>
            </div>
        </footer>
    );
};