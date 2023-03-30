/**
 * NavBar Component using Next.js Link
 */
import { FC } from 'react';
import {MdHome} from 'react-icons/md'
import { NavButton } from './NavButton';

export const NavBar: FC = () => {
    return (
        <nav className='flex items-center justify-center gap-x-10 absolute place-self-center top-0 pt-4'>
            <NavButton path='/' icon={MdHome} />
            <NavButton path='/patientForm' />
            <NavButton path='/patientList' />
            <NavButton path='/contracts' />
            <NavButton path='/contractForm' />
        </nav>
    );
};