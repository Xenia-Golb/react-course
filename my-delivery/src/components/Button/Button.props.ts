import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface Buttonprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearence?: 'big' | 'small';

}