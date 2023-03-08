import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    return (
        <div className={'bg-slate-900 grid place-content-center min-h-screen'}>
            <div className={'flex gap-2'}>
                <Button
                    onClick={() => console.log('hai ini aku kamu juga')}
                    type='submit'
                >
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button
                    className='bg-sky-600'
                    onClick={() => console.log('Ini aku Wahyu')}
                    type='button'
                >
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button
                    className='bg-black'
                    onClick={() => console.log('Ini aku Wahyu')}
                    type='button'
                >
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const {
        className = 'bg-blue-600',
        children,
        text,
        type = 'submit',
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
