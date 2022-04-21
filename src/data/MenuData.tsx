import React from 'react';
import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineMoneyCollect,
    AiOutlineUser,
    AiOutlineFundProjectionScreen
} from 'react-icons/ai';
import { BiMessageRoundedError, BiMessageRoundedDetail } from 'react-icons/bi';
import { MenuItem } from 'models/MenuItem';
import homeBackground from 'assets/images/bcg_all_back_with_person_main.png';
import contactBackground from 'assets/images/bcg_all_back_with_person_contact.png';

// The elements in comments below will be helpful later.

export const MenuData: MenuItem[] = [
    {
        title: 'About',
        path: '/about',
        icon: <BiMessageRoundedError />,
        background: homeBackground,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiOutlineFundProjectionScreen />,
        background: homeBackground,
        // iconClosed: <AiFillCaretDown />,
        // iconOpened: <AiFillCaretUp />,
        submenu: [
            // {
            //     title: 'timber-ware.pl',
            //     path: '/projects/timber-ware',
            //     icon: <AiOutlineUser />,
            //     background: '',
            // },
            // {
            //     title: 'meb-box.pl',
            //     path: '/projects/meb-box',
            //     icon: <AiOutlineMoneyCollect />,
            //     background: '',
            // }
        ]
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <BiMessageRoundedDetail />,
        background: contactBackground,
    },
]