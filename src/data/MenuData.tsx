import React from 'react';
import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser,
    AiOutlineMessage
} from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { MenuItem } from 'models/MenuItem';

export const MenuData: MenuItem[] = [
    {
        title: 'About',
        path: '/about',
        icon: <AiOutlineHome />,
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaOpencart />,
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
        icon: <AiOutlineMessage />,
    },
]