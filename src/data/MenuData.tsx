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


export const MenuData: MenuItem[] = [
    {
        title: 'About',
        path: '/about',
        icon: <BiMessageRoundedError />,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiOutlineFundProjectionScreen />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        submenu: [
            {
                title: 'timber-ware.pl',
                path: '/projects/timber-ware',
                icon: <AiOutlineUser />,
            },
            {
                title: 'meb-box.pl',
                path: '/projects/meb-box',
                icon: <AiOutlineMoneyCollect />,
            }
        ]
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <BiMessageRoundedDetail />,
    },
]