
import React from 'react';
import { IconProps } from './IconProps';

const SeedlingIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.354 0 2.665-.246 3.886-.713M12 21c-1.354 0-2.665-.246-3.886-.713M12 3c-4.135 0-7.5 3.365-7.5 7.5 0 2.19.94 4.183 2.457 5.572M12 3c4.135 0 7.5 3.365 7.5 7.5 0 2.19-.94 4.183-2.457 5.572" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9c0 1.243-.393 2.4-1.077 3.393M8.923 12.393c-.684-1.002-1.077-2.15-1.077-3.393" />
    </svg>
);

export default SeedlingIcon;
