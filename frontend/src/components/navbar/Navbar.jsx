/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState, useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon, SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../GlobalContext';
import UserApi from '../../util/UserApi';
import fragments from '../../assets/images/fragments.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const history = useHistory();

    const [curr, setCurr] = useState(`/${window.location.href.split('/')[3]}`);

    const [profileImg, setProfileImg] = useState();

    useEffect(() => {
        console.log(curr);
        console.log(history.location.pathname);
    }, [curr]);

    const navigation = [
        { name: 'Courses', href: '/courses', current: curr === '/courses' ? true : false },
        { name: 'CodeEditor', href: '/editor', current: curr === '/editor' ? true : false },
        { name: 'Reports', href: '/reports', current: curr === '/reports' ? true : false },
        { name: 'Notes', href: '/notes', current: curr === '/notes' ? true : false },
    ]

    const { siteTheme, userInfo } = useContext(GlobalContext);
    const [theme, setTheme] = siteTheme;
    const [userData, setUserData] = userInfo;

    useEffect(() => {
        const fetchImg = async () => {
            const data = await UserApi.getProfileImg(userData.profile);
            setProfileImg(data.config.url);
        };

        fetchImg();
    }, [userData]);
    return (
        <Disclosure as="nav" className="bg-indigo-500 sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="max-w-12xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center text-white font-black" onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
                                    <img
                                        className="hidden lg:block h-8 w-auto mr-1"
                                        src={fragments}
                                        alt="Workflow"
                                    /> Fragments
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                onClick={() => {
                                                    history.push(item.href);
                                                    setCurr(item.href);
                                                }}
                                                // href={item.href}
                                                className={classNames(
                                                    item.current ? 'border-b-2 border-white text-white font-bold' : 'text-gray-300 hover:border-b-2 hover:border-white hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-bold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="p-1.5 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-0.5 focus:ring-offset-gray-800 focus:ring-white bg-indigo-600"
                                >
                                    {/* <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                    {theme === true ? (<>
                                        <span className="sr-only bg-indigo-600">Switch Theme</span>
                                        <MoonIcon className="h-6 w-6 bg-indigo-600" aria-hidden="true" onClick={() => {
                                            localStorage.setItem('edtech-theme', false);
                                            setTheme(false);
                                            // window.location.reload();
                                        }} />
                                    </>) : (<>
                                        <span className="sr-only bg-indigo-600">Switch Theme</span>
                                        <SunIcon className="h-6 w-6 bg-indigo-600" aria-hidden="true" onClick={() => {
                                            localStorage.setItem('edtech-theme', true);
                                            setTheme(true);
                                            // window.location.reload();
                                        }} />
                                    </>)
                                    }
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white bg-indigo-600 p-2">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src={profileImg}
                                                alt=""
                                            />
                                            <div className="text-gray-50 text-base ml-2 font-bold">{userData.first_name} {userData.last_name}</div>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        onClick={() => history.push('/team')}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600')}
                                                    >
                                                        Our Team
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        onClick={() => {
                                                            history.push('login');
                                                            setCurr('/login');
                                                            localStorage.removeItem('edtech-user');
                                                        }}
                                                        // href="/login"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-gray-600')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
